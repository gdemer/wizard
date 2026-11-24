const allWizards = {
  wizard_00: {
    name: "Σειρά εκτέλεσης στη React",
    steps: [
      {
        title: "1. Ανοιγμα του index.html",
        content:
          "<p>Ο browser ανοίγει το http://localhost:5173/ και ο Vite στέλνει το index.html που βρίσκεται στη ρίζα του project, όχι στο src/.</p>",
      },
      {
        title: "2. Προετοιμασία του αρχείου σας",
        content: `<p>Το index.html περιέχει ένα κενό αρχείο δομής:</p>
<pre><code class="language-markup">&lt;div id="root"&gt;&lt;/div&gt;</code></pre>
<p>και μια γραμμή που συνδέει τη JavaScript:</p>Το createRoot βρίσκει το υπάρχον div#root και λέει στο React ότι από εδώ και κάτω αυτό ελέγχει το περιεχόμενο. Το .render(<App />) ξεκινά το App. 
<pre><code class="language-markup">&lt;script type="module" src="/src/main.jsx"&gt;&lt;/script&gt;</code></pre>
<p>Αυτή η γραμμή είναι που αναλαμβάνει να φορτώσει το αρχείο main.jsx.</p>`,
      },
      {
        title: "3. Εκτέλεση του main.jsx",
        content: `<p>Το main.jsx εκτελείται πρώτο από τα δικά σας αρχεία. Φορτώνει το index.css και το App.jsx, και μετά τρέχει:     createRoot(document.getElementById('root')).render(<App />);   Ο Vite «τρέχει» το <code>src/main.jsx</code>. Αυτό το αρχείο είναι η γέφυρα μεταξύ της React και της HTML σελίδας. Εδώ εισάγονται οι απαραίτητες βιβλιοθήκες:</p>
<pre><code class="language-javascript">import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'</code></pre>`,
      },
      {
        title: "4. Δημιουργία του Virtual DOM Root",
        content: `<p>Μέσα στο <code>main.jsx</code>, η React εντοπίζει το div με το id "root" στην HTML και «γκαντζώνεται» πάνω του χρησιμοποιώντας τη μέθοδο <code>createRoot</code>:</p>
  <pre><code class="language-jsx">ReactDOM.createRoot(document.getElementById('root')).render(
    &lt;React.StrictMode&gt;
      &lt;App /&gt;
    &lt;/React.StrictMode&gt;,
  )</code></pre>`,
      },

      {
        title: "5. Φόρτωση του App component",
        content: `<p>Η συνάρτηση <code>render()</code> αναλαμβάνει να σχεδιάσει το κεντρικό component της εφαρμογής σας, το <code>&lt;App /&gt;</code> (που βρίσκεται στο <code>src/App.jsx</code>), μέσα στο Virtual DOM.</p>`,
      },
      {
        title: "6. Εμφάνιση του τελικού HTML στον Browser",
        content: `<p>Η React μετατρέπει όλο τον κώδικα JSX που επιστρέφει το <code>App.jsx</code> (και τα τυχόν υπο-components του) σε πραγματικά στοιχεία HTML. Στη συνέχεια, τα «κάνει inject» (εισάγει) μέσα στο αρχικό <code>&lt;div id="root"&gt;</code>. Πλέον, ο χρήστης βλέπει την εφαρμογή React ζωντανή στην οθόνη του!</p>`,
      },
    ],
  },

  wizard_0: {
    name: "Ανεβάζω web site στο github",
    steps: [
      {
        title: "1. Πως ανεβάζω web site στο github",
        content:
          "<p>Για να ανεβάσετε μια στατική ιστοσελίδα (HTML, CSS, JavaScript) δωρεάν στο GitHub και να τη δημοσιεύσετε μέσω του GitHub Pages, ακολουθήστε τα παρακάτω βήματα.</p>",
      },
      {
        title: "2. Προετοιμασία του αρχείου σας",
        content:
          "<p>Ονομάστε την κεντρική σελίδα του site σας αυστηρά index.html.\nΤο GitHub αναζητά αυτό το αρχείο για να το χρησιμοποιήσει ως αρχική σελίδα.</p>",
      },
      {
        title: "3. Δημιουργία Repository (Αποθετηρίου)",
        content:
          "<p>Συνδεθείτε στο GitHub.\nΠατήστε το κουμπί New (ή το σύμβολο + πάνω δεξιά και μετά New repository).\nΔώστε ένα όνομα στο Repository σας (π.χ. my-website).\nΕπιλέξτε το να είναι Public (Δημόσιο). Είναι απαραίτητο για το δωρεάν GitHub Pages.\nΕπιλέξτε το κουτάκι Add a README file.\nΠατήστε Create repository.</p>",
      },
      {
        title: "4. Ανέβασμα των αρχείων (Μέσω Browser)",
        content:
          "<p>Μέσα στο νέο σας repository, πατήστε το κουμπί Add file και επιλέξτε Upload files.\nΣύρετε (drag and drop) όλα τα αρχεία και τους φακέλους της ιστοσελίδας σας (π.χ. index.html, φακέλους css, images) μέσα στο πλαίσιο.\nΣτο κάτω μέρος της σελίδας, πατήστε το πράσινο κουμπί Commit changes.</p>",
      },
      {
        title: "5. Ενεργοποίηση του GitHub Pages (Δημοσιοποίηση)",
        content:
          "<p>Πηγαίνετε στα Settings (Ρυθμίσεις) του repository σας (το εικονίδιο με το γρανάζι επάνω δεξιά).\nΑπό το αριστερό μενού, επιλέξτε την ενότητα Pages.\nΣτο πεδίο Build and deployment -&gt; Source, βεβαιωθείτε ότι λέει Deploy from a branch.\nΣτο πεδίο Branch, αλλάξτε το None σε main (ή master) και αφήστε τον φάκελο ως / (root).\nΠατήστε Save.</p>",
      },
      {
        title: "6. Το αποτέλεσμα",
        content:
          "<p>Σε 1 με 2 λεπτά, αν ανανεώσετε τη σελίδα των ρυθμίσεων (Pages), θα εμφανιστεί στην κορυφή ένας σύνδεσμος. Η ιστοσελίδα σας θα είναι ζωντανή στο διαδίκτυο στη μορφή:\nhttps://[το-όνομα-χρήστη-σας].github.io/[το-όνομα-του-repository]/\nΘέλετε να προχωρήσουμε σε οδηγίες για το πώς να το κάνετε αυτό χρησιμοποιώντας το Git από το τερματικό (Terminal) ή αντιμετωπίζετε κάποιο πρόβλημα με τη διάταξη των αρχείων σας;</p>",
      },
      {
        title: " Με εντολές Git",
        content:
          '<p>Ακολουθήστε τις παρακάτω εντολές Git για να ανεβάσετε τα αρχεία σας στο GitHub:</p>\n<pre><code>git init\ngit add .\ngit commit -m "Initial commit"\ngit branch -M main\ngit remote add origin https://github.com/[το-όνομα-χρήστη-σας]/[το-όνομα-του-repository].git\ngit push -u origin main\n</code></pre>',
      },
    ],
  },
  wizard_1: {
    name: "wiz1",
    steps: [
      {
        title: "1. Εισαγωγή στον Οδηγό",
        content:
          "<p>Καλώς ορίσατε στον αυτόματο οδηγό βήμα-βήμα (Wizard). \nΑυτό το αρχείο δημιουργήθηκε αυτόματα από την Python επειδή το αρχείο που ζητήσατε δεν υπήρχε.</p>\n<p>Μπορείτε να επεξεργαστείτε αυτό το κείμενο ελεύθερα. Κάθε φορά που χρησιμοποιείτε το σύμβολο <code>#</code> (τίτλος), η Python θα δημιουργεί ένα νέο βήμα στον Wizard.</p>",
      },
      {
        title: "2. Απαιτήσεις Συστήματος",
        content:
          "<p>Για να τρέξετε σωστά την εφαρμογή, θα χρειαστείτε:\n* <strong>Python 3.x</strong> εγκατεστημένη στον υπολογιστή σας.\n* Τη βιβλιοθήκη <code>markdown</code> (<code>pip install markdown</code>).\n* Έναν σύγχρονο browser (Chrome, Firefox, Edge).</p>",
      },
      {
        title: "3. Ρυθμίσεις & Παραμετροποίηση",
        content:
          "<p>Εδώ μπορείτε να προσθέσετε τις δικές σας οδηγίες. Το Markdown υποστηρίζει επίσης <strong>έντονη γραφή</strong> και <em>πλάγια γράμματα</em>.</p>\n<ol>\n<li>Ανοίξτε το αρχείο κειμένου.</li>\n<li>Προσθέστε τους δικούς σας τίτλους με <code>#</code>.</li>\n<li>Τρέξτε ξανά το script της Python.</li>\n</ol>",
      },
      {
        title: "4. Ολοκλήρωση Διαδικασίας",
        content:
          "<p>Συγχαρητήρια! Φτάσατε στο τελευταίο βήμα. \nΠατώντας το κουμπί <strong>Τέλος</strong>, ο οδηγός θα ολοκληρωθεί. Μπορείτε να ενσωματώσετε αυτό το Vanilla HTML αρχείο σε οποιαδήποτε ιστοσελίδα.</p>",
      },
    ],
  },
  wizard_2: {
    name: "Μετατροπή pptx2Markdown",
    steps: [
      {
        title: "1. Ανεβάστε το PowerPoint στο Google Drive",
        content:
          "<p>Συνδεθείτε στο λογαριασμό σας και σύρετε το αρχείο .pptx στο Drive.</p>",
      },
      {
        title: "2. Άνοιγμα με Google Slides",
        content:
          "<p>Κάντε δεξί κλικ στο αρχείο και επιλέξτε Άνοιγμα με &gt; Παρουσιάσεις Google.</p>",
      },
      {
        title: "3. Εγκατάσταση Πρόσθετου",
        content:
          '<p>Πηγαίνετε στο μενού Επεκτάσεις &gt; Πρόσθετα &gt; Λήψη πρόσθετων και αναζητήστε το "Slides to Markdown".</p>',
      },
      {
        title: "4. Εξαγωγή σε Markdown",
        content:
          "<p>Τρέξτε το πρόσθετο για να εξαγάγετε το κείμενο των διαφανειών (μαζί με τους τίτλους και τις λίστες) σε μορφή Markdown.</p>",
      },
    ],
  },
  wizard_3: {
    name: "Μετατροπή Word2Markdown",
    steps: [
      {
        title: "1.  Μετατροπή Word (.docx) μέσω Google Docs σε Markdown",
        content: "<p>Ανεβάστε το αρχείο Word στο Google Drive σας.</p>",
      },
    ],
  },
};
