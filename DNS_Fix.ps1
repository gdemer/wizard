# Απαιτείται εκτέλεση με δικαιώματα Διαχειριστή (Administrator)
if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Warning "Παρακαλώ εκτελέστε το PowerShell ως Διαχειριστής!"
    Exit
}

# Ρύθμιση κωδικοποίησης για σωστή εμφάνιση ελληνικών χαρακτήρων
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

# Ορισμός διαδρομής για το αρχείο Log στην επιφάνεια εργασίας
logPath = "env:USERPROFILE\Desktop\ANIK_Repair_Log.txt"

# Συνάρτηση για ταυτόχρονη εμφάνιση στην οθόνη και εγγραφή στο Log αρχείο
function Write-Log {
    param (
        [string]$Message,
        [string]$ForegroundColor = "White"
    )
    # Εμφάνιση στην κονσόλα
    Write-Host Message -ForegroundColor ForegroundColor
    
    # Αφαίρεση ειδικών χαρακτήρων μορφοποίησης πριν την αποθήκευση στο αρχείο
    cleanMessage = Message -replace '\n', "`r`n"
    \$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "[\$timestamp] cleanMessage" | Out-File -FilePath logPath -Append -Encoding utf8
}

function Show-Menu {
    Clear-Host
    Write-Host "====================================================" -ForegroundColor Cyan
    Write-Host "      ANIK DOWNLOAD ISSUES TOOLKIT (PowerShell v1.1)" -ForegroundColor Cyan
    Write-Host "      ANIK Digital and Information Technology" -ForegroundColor Cyan
    Write-Host "====================================================" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  [1]  Check Internet Connection"
    Write-Host "  [2]  Flush DNS Cache"
    Write-Host "  [3]  Reset Network Stack"
    Write-Host "  [4]  Restart BITS Service"
    Write-Host "  [5]  Restart Windows Update Service"
    Write-Host "  [6]  Clear Windows Update Download Cache"
    Write-Host "  [7]  Repair Windows System Files (SFC)"
    Write-Host "  [8]  Check Windows Component Store (DISM)"
    Write-Host "  [9]  Clean Temporary Download Files"
    Write-Host "  [10] Run All Download Repairs (Log & Restart)" -ForegroundColor Yellow
    Write-Host "  [0]  Exit"
    Write-Host ""
}

# --- Συναρτήσεις Επισκευής ---

function Invoke-InternetTest {
    Write-Log "`n[*] Έλεγχος σύνδεσης στο Internet..." "Cyan"
    try {
        Write-Log "Δοκιμή Ping στο Cloudflare DNS (1.1.1.1)..."
        $ping = Test-Connection -ComputerName 1.1.1.1 -Count 2 -ErrorAction Stop
        foreach ($res in $ping) {
            Write-Log "Απάντηση από $($res.Address): Χρόνος=$($res.ResponseTime)ms"
        }
        
        Write-Log "Δοκιμή ανάλυσης DNS (microsoft.com)..."
        $dns = Resolve-DnsName -Name microsoft.com -ErrorAction Stop
        Write-Log "[✓] Το δίκτυο λειτουργεί κανονικά." "Green"
    } catch {
        Write-Log "[X] Σφάλμα δικτύου: $_" "Red"
    }
}

function Invoke-FlushDNS {
    Write-Log "`n[*] Εκκαθάριση της DNS Cache..." "Cyan"
    try {
        Clear-DnsClientCache -ErrorAction Stop
        Write-Log "[✓] Η DNS cache καθαρίστηκε με επιτυχία." "Green"
    } catch {
        Write-Log "[X] Αποτυχία εκκαθάρισης DNS: \$_" "Red"
    }
}

function Invoke-NetworkReset {
    Write-Log "`n[*] Επαναφορά του Network Stack..." "Cyan"
    try {
        netsh winsock reset | Out-Null
        netsh int ip reset | Out-Null
        Write-Log "[✓] Το δίκτυο επαναφέρθηκε επιτυχώς." "Green"
    } catch {
        Write-Log "[X] Αποτυχία επαναφοράς δικτύου: $_" "Red"
    }
}

function Invoke-RestartBITS {
    Write-Log "`n[*] Επανεκκίνηση της υπηρεσίας BITS..." "Cyan"
    try {
        Restart-Service -Name bits -Force -ErrorAction Stop
        Write-Log "[✓] Η υπηρεσία BITS επανεκκινήθηκε." "Green"
    } catch {
        Write-Log "[X] Αποτυχία επανεκκίνησης BITS: \$_" "Red"
    }
}

function Invoke-RestartWUAUSERV {
    Write-Log "`n[*] Επανεκκίνηση της υπηρεσίας Windows Update..." "Cyan"
    try {
        Restart-Service -Name wuauserv -Force -ErrorAction Stop
        Write-Log "[✓] Η υπηρεσία Windows Update επανεκκινήθηκε." "Green"
    } catch {
        Write-Log "[X] Αποτυχία επανεκκίνησης Windows Update: $_" "Red"
    }
}

function Invoke-ClearUpdateCache {
    Write-Log "`n[*] Εκκαθάριση του Windows Update Download Cache..." "Cyan"
    try {
        Write-Log "Διακοπή υπηρεσιών συστήματος..."
        Stop-Service -Name wuauserv -Force -ErrorAction Stop
        Stop-Service -Name bits -Force -ErrorAction Stop
        
        shFolder = "env:SystemRoot\SoftwareDistribution"
        if (Test-Path \$shFolder) {
            Write-Log "Διαγραφή προσωρινών αρχείων λήψης (SoftwareDistribution)..."
            Remove-Item -Path "\$shFolder\*" -Recurse -Force -ErrorAction SilentlyContinue
        }
        
        Write-Log "Επανεκκίνηση υπηρεσιών..."
        Start-Service -Name wuauserv
        Start-Service -Name bits
        Write-Log "[✓] Η προσωρινή μνήμη λήψεων καθαρίστηκε με ασφάλεια." "Green"
    } catch {
        Write-Log "[X] Αποτυχία εκκαθάρισης cache: \$_" "Red"
        Start-Service -Name wuauserv -ErrorAction SilentlyContinue
        Start-Service -Name bits -ErrorAction SilentlyContinue
    }
}

function Invoke-SFCSan {
    Write-Log "`n[*] Έλεγχος και επιδιόρθωση αρχείων συστήματος (SFC)..." "Cyan"
    try {
        sfc /scannow
        Write-Log "[✓] Ο έλεγχος SFC ολοκληρώθηκε." "Green"
    } catch {
        Write-Log "[X] Σφάλμα κατά την εκτέλεση του SFC: $_" "Red"
    }
}

function Invoke-DISMScan {
    Write-Log "`n[*] Επιδιόρθωση Component Store (DISM)..." "Cyan"
    try {
        Write-Log "Έναρξη Repair-WindowsImage (Αυτό μπορεί να διαρκέσει μερικά λεπτά)..."
        \$dism = Repair-WindowsImage -Online -RestoreHealth
        Write-Log "[✓] Η επιδιόρθωση DISM ολοκληρώθηκε." "Green"
    } catch {
        Write-Log "[X] Σφάλμα κατά την εκτέλεση του DISM: \$_" "Red"
    }
}

function Invoke-CleanTempFiles {
    Write-Log "`n[*] Καθαρισμός προσωρινών αρχείων συστήματος (Temp)..." "Cyan"
    try {
        $tempPath = $env:TEMP
        Get-ChildItem -Path $tempPath -Recurse -ErrorAction SilentlyContinue | Remove-Item -Recurse -Force -ErrorAction SilentlyContinue
        Write-Log "[✓] Τα προσωρινά αρχεία διαγράφηκαν." "Green"
    } catch {
        Write-Log "[X] Αποτυχία καθαρισμού Temp αρχείων: $_" "Red"
    }
}

# --- ΥΛΟΠΟΙΗΣΗ ΕΠΙΛΟΓΗΣ 10 ---
function Invoke-AllRepairs {
    # Δημιουργία ή εκκαθάριση του αρχείου Log
    "====================================================" | Out-File -FilePath $logPath -Encoding utf8
    "   ANIK DOWNLOAD REPAIRS - FULL SESSION LOG          " | Out-File -FilePath $logPath -Append -Encoding utf8
    "====================================================" | Out-File -FilePath $logPath -Append -Encoding utf8
    
    Write-Log "`n====================================================" "Yellow"
    Write-Log "    ΕΝΑΡΞΗ ΠΛΗΡΟΥΣ ΑΥΤΟΜΑΤΗΣ ΕΠΙΔΙΟΡΘΩΣΗΣ (ALL FIX)   " "Yellow"
    Write-Log "====================================================" "Yellow"
    Write-Log "Όλα τα αποτελέσματα αποθηκεύονται στο: \$logPath" "Cyan"
    
    Invoke-InternetTest
    Invoke-FlushDNS
    Invoke-NetworkReset
    Invoke-RestartBITS
    Invoke-RestartWUAUSERV
    Invoke-ClearUpdateCache
    Invoke-SFCSan
    Invoke-DISMScan
    Invoke-CleanTempFiles
    
    Write-Log "`n====================================================" "Green"
    Write-Log " [✓] Όλες οι διαδικασίες επισκευής ολοκληρώθηκαν!  " "Green"
    Write-Log " Το αρχείο καταγραφής αποθηκεύτηκε στην Επιφάνεια Εργασίας." "Cyan"
    Write-Log "====================================================" "Green"
    
    Write-Log "`n[!] ΠΡΟΣΟΧΗ: Ο υπολογιστής θα επανεκκινηθεί αυτόματα σε 60 δευτερόλεπτα." "Yellow"
    Write-Log "Αν θέλετε να ΑΚΥΡΩΣΕΤΕ την επανεκκίνηση, κλείστε αυτό το παράθυρο ΤΩΡΑ." "Red"
    
    shutdown /r /t 60 /c "Το ANIK Toolkit ολοκλήρωσε τις επισκευές. Επανεκκίνηση σε 60 δευτερόλεπτα."
    
    for (\$i = 60; i -gt 0; i--) {
        Write-Host -NoNewline "`rΥπολειπόμενος χρόνος για Restart: $i δευτερόλεπτα... "
        Start-Sleep -Seconds 1
    }
}

# --- Κύριος Βρόχος Μενού ---
do {
    Show-Menu
    $choice = Read-Host "Επιλέξτε έναν αριθμό"
    
    switch ($choice) {
        "1"  { Invoke-InternetTest }
        "2"  { Invoke-FlushDNS }
        "3"  { Invoke-NetworkReset }
        "4"  { Invoke-RestartBITS }
        "5"  { Invoke-RestartWUAUSERV }
        "6"  { Invoke-ClearUpdateCache }
        "7"  { Invoke-SFCSan }
        "8"  { Invoke-DISMScan }
        "9"  { Invoke-CleanTempFiles }
        "10" { Invoke-AllRepairs }
        "0"  { Write-Host "Έξοδος από το εργαλείο..." -ForegroundColor Green; Start-Sleep -Seconds 1; exit }
        default { Write-Host "Μη έγκυρη επιλογή, προσπαθήστε ξανά." -ForegroundColor Red }
    }
    
    if ($choice -ne "0" -and $choice -ne "10") {
        Write-Host "`nΠιέστε Enter για να επιστρέψετε στο μενού..."
        Read-Host
    }
} while (\$true)
