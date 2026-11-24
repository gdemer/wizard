const allWizards = {
  wizard_1: {
    name: "wiz1",
    steps: [
      {
        title: "1. Εισαγωγή: τι θα φτιάξουμε",
        content:
          "<p>Σε αυτό το μάθημα θα φτιάξουμε βήμα προς βήμα μια <strong>εφαρμογή καιρού</strong> με <strong>React</strong>, που παίρνει δεδομένα από το <strong>OpenWeatherMap API</strong>.</p>\n<p>Η κάρτα καιρού (όπως στην εικόνα) δείχνει:</p>\n<ul>\n<li>τη <strong>θερμοκρασία</strong> και την <strong>περιγραφή</strong> (π.χ. «ανοιχτός ουρανός»)</li>\n<li>την <strong>πόλη</strong> και τη χώρα</li>\n<li>την <strong>υγρασία</strong> και τον <strong>άνεμο</strong></li>\n<li>επιπλέον: αίσθηση θερμοκρασίας, ελάχιστη/μέγιστη, πίεση, ορατότητα, ανατολή και δύση</li>\n</ul>\n<p>Στο τέλος θα ανεβάσουμε τον κώδικα στο <strong>GitHub</strong> και θα τον δημοσιεύσουμε στο <strong>Netlify</strong>, ώστε η εφαρμογή να έχει δική της διεύθυνση στο διαδίκτυο.</p>\n<p><strong>Τι θα μάθετε:</strong> components, props, state (<code>useState</code>), <code>useEffect</code>, κλήση API με <code>fetch</code>, μεταβλητές περιβάλλοντος, Git, GitHub, Netlify.</p>",
      },
      {
        title: "2. Τι χρειάζεστε πριν ξεκινήσετε",
        content:
          '<p>Εγκαταστήστε ή δημιουργήστε τα παρακάτω (όλα δωρεάν):</p>\n<ul>\n<li><strong>Node.js</strong> (έκδοση LTS) από το <a href="https://nodejs.org">https://nodejs.org</a>. Έλεγχος στο τερματικό: <code>node -v</code></li>\n<li><strong>Git</strong> από το <a href="https://git-scm.com">https://git-scm.com</a>. Έλεγχος: <code>git --version</code></li>\n<li>Έναν επεξεργαστή κώδικα, π.χ. <strong>Visual Studio Code</strong></li>\n<li>Λογαριασμό στο <strong>OpenWeatherMap</strong> (<a href="https://openweathermap.org">https://openweathermap.org</a>)</li>\n<li>Λογαριασμό στο <strong>GitHub</strong> (<a href="https://github.com">https://github.com</a>)</li>\n<li>Λογαριασμό στο <strong>Netlify</strong> (<a href="https://www.netlify.com">https://www.netlify.com</a>), προτιμήστε σύνδεση μέσω GitHub</li>\n</ul>\n<p>Το <strong>τερματικό</strong> είναι το παράθυρο όπου πληκτρολογούμε εντολές (Terminal σε Mac/Linux, PowerShell ή Terminal στα Windows, ή το ενσωματωμένο τερματικό του VS Code).</p>',
      },
      {
        title: "3. Λήψη κλειδιού API από το OpenWeatherMap",
        content:
          "<p>Το <strong>API key</strong> είναι ένας μυστικός κωδικός που μας επιτρέπει να ζητάμε δεδομένα.</p>\n<ol>\n<li>Συνδεθείτε στο OpenWeatherMap.</li>\n<li>Πηγαίνετε στο προφίλ σας και επιλέξτε <strong>API keys</strong>.</li>\n<li>Αντιγράψτε το προεπιλεγμένο κλειδί (ή δημιουργήστε νέο).</li>\n<li>Κρατήστε το σε ασφαλές σημείο. <strong>Δεν το δημοσιεύουμε ποτέ στο GitHub.</strong></li>\n</ol>\n<p><strong>Προσοχή:</strong> ένα νέο κλειδί μπορεί να χρειαστεί από λίγα λεπτά έως μερικές ώρες για να ενεργοποιηθεί. Αν δείτε σφάλμα 401, περιμένετε και δοκιμάστε ξανά.</p>\n<p>Δοκιμή στον browser (αντικαταστήστε το <code>ΚΛΕΙΔΙ</code>):</p>\n<pre><code>https://api.openweathermap.org/data/2.5/weather?q=Athens&amp;appid=ΚΛΕΙΔΙ&amp;units=metric&amp;lang=el\n</code></pre>\n<p>Αν δείτε κείμενο JSON με θερμοκρασία, το κλειδί δουλεύει.</p>",
      },
      {
        title: "4. Δημιουργία του project με Vite",
        content:
          '<p>Το <strong>Vite</strong> φτιάχνει έτοιμο σκελετό React. Στο τερματικό, πηγαίνετε στον φάκελο όπου θέλετε να δουλέψετε και τρέξτε:</p>\n<pre><code class="language-bash">npm create vite@latest weather-app -- --template react\ncd weather-app\nnpm install\n</code></pre>\n<p>Αν ρωτήσει για επιλογές, διαλέξτε <strong>React</strong> και <strong>JavaScript</strong>. Η εντολή <code>npm install</code> κατεβάζει τις βιβλιοθήκες που χρειάζεται το project.</p>\n<p>Ανοίξτε τον φάκελο στο VS Code με <code>code .</code></p>',
      },
      {
        title: "5. Γνωριμία με τη δομή και καθαρισμός",
        content:
          '<p>Οι σημαντικοί φάκελοι και αρχεία:</p>\n<ul>\n<li><code>index.html</code>: η μοναδική σελίδα της εφαρμογής</li>\n<li><code>src/main.jsx</code>: το σημείο εκκίνησης της React</li>\n<li><code>src/App.jsx</code>: το κύριο component</li>\n<li><code>src/App.css</code> και <code>src/index.css</code>: τα στυλ</li>\n</ul>\n<p>Διαγράψτε τα άχρηστα παραδείγματα: τα αρχεία μέσα στο <code>src/assets</code> (αν υπάρχουν).</p>\n<p>Φτιάξτε δύο νέους φακέλους μέσα στο <code>src</code>:</p>\n<pre><code class="language-bash">mkdir src/components src/services\n</code></pre>\n<p>Στο <code>index.html</code> αλλάξτε τη γλώσσα και τον τίτλο:</p>\n<pre><code class="language-html">&lt;html lang=&quot;el&quot;&gt;\n...\n&lt;title&gt;Εφαρμογή Καιρού&lt;/title&gt;\n</code></pre>',
      },
      {
        title: "6. Αποθήκευση του κλειδιού σε αρχείο .env",
        content:
          "<p>Δημιουργήστε στη ρίζα του project (δίπλα στο <code>package.json</code>) αρχείο με όνομα <code>.env</code>:</p>\n<pre><code>VITE_OPENWEATHER_API_KEY=το_κλειδί_σας_εδώ\n</code></pre>\n<p>Το πρόθεμα <code>VITE_</code> είναι <strong>υποχρεωτικό</strong>, αλλιώς το Vite δεν θα δώσει τη μεταβλητή στον κώδικα.</p>\n<p>Δημιουργήστε και ένα αρχείο <code>.env.example</code> με το ίδιο περιεχόμενο αλλά <strong>χωρίς το πραγματικό κλειδί</strong>. Αυτό είναι ο «οδηγός» για όποιον κατεβάσει το project:</p>\n<pre><code># Αντιγράψτε αυτό το αρχείο ως .env και βάλτε το δικό σας κλειδί\nVITE_OPENWEATHER_API_KEY=το_κλειδί_σας_εδώ\n</code></pre>\n<p>Στο τέλος του αρχείου <code>.gitignore</code> προσθέστε τις γραμμές, ώστε το <code>.env</code> να μην ανεβεί ποτέ στο GitHub:</p>\n<pre><code># Μυστικά κλειδιά\n.env\n.env.local\n</code></pre>",
      },
      {
        title: "7. Η επικοινωνία με το API: weatherApi.js",
        content:
          '<p>Δημιουργήστε το αρχείο <code>src/services/weatherApi.js</code>. Εδώ βάζουμε όλη τη λογική που μιλά με το API, ώστε τα components να μένουν απλά.</p>\n<pre><code class="language-javascript">// Επικοινωνία με το OpenWeatherMap API.\n// Το κλειδί διαβάζεται από το αρχείο .env (Vite: μεταβλητές που ξεκινούν με VITE_)\nconst API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;\nconst BASE_URL = &quot;https://api.openweathermap.org/data/2.5/weather&quot;;\n\nexport async function fetchWeather(city) {\n  if (!API_KEY) {\n    throw new Error(&quot;Λείπει το κλειδί API. Ελέγξτε το αρχείο .env.&quot;);\n  }\n\n  const url =\n    `${BASE_URL}?q=${encodeURIComponent(city)}` +\n    `&amp;appid=${API_KEY}&amp;units=metric&amp;lang=el`;\n\n  const response = await fetch(url);\n\n  if (response.status === 404) {\n    throw new Error(&quot;Η πόλη δεν βρέθηκε. Δοκιμάστε άλλη ορθογραφία.&quot;);\n  }\n  if (response.status === 401) {\n    throw new Error(&quot;Μη έγκυρο κλειδί API (ή δεν έχει ενεργοποιηθεί ακόμη).&quot;);\n  }\n  if (!response.ok) {\n    throw new Error(&quot;Κάτι πήγε στραβά. Δοκιμάστε ξανά αργότερα.&quot;);\n  }\n\n  return response.json();\n}\n</code></pre>\n<p><strong>Τι κάνει:</strong></p>\n<ul>\n<li>Διαβάζει το κλειδί από το <code>import.meta.env</code>.</li>\n<li>Φτιάχνει τη διεύθυνση (URL) με την πόλη, <code>units=metric</code> (βαθμοί Κελσίου) και <code>lang=el</code> (ελληνικές περιγραφές).</li>\n<li>Το <code>encodeURIComponent</code> προστατεύει ονόματα με κενά ή ειδικούς χαρακτήρες.</li>\n<li>Με <code>async/await</code> περιμένει την απάντηση και δίνει κατανοητά μηνύματα για τα συνηθισμένα σφάλματα.</li>\n</ul>',
      },
      {
        title: "8. Το component αναζήτησης: SearchBar.jsx",
        content:
          '<p>Δημιουργήστε το <code>src/components/SearchBar.jsx</code>:</p>\n<pre><code class="language-jsx">import { useState } from &quot;react&quot;;\n\nfunction SearchBar({ onSearch, loading }) {\n  // Η τιμή του πεδίου κειμένου κρατιέται σε state\n  const [text, setText] = useState(&quot;&quot;);\n\n  function handleSubmit(event) {\n    event.preventDefault(); // να μην ξαναφορτώνει η σελίδα\n    const city = text.trim();\n    if (city) onSearch(city);\n  }\n\n  return (\n    &lt;form className=&quot;search-bar&quot; onSubmit={handleSubmit}&gt;\n      &lt;input\n        type=&quot;text&quot;\n        placeholder=&quot;Γράψτε μια πόλη (π.χ. Athens)&quot;\n        value={text}\n        onChange={(e) =&gt; setText(e.target.value)}\n        aria-label=&quot;Όνομα πόλης&quot;\n      /&gt;\n      &lt;button type=&quot;submit&quot; disabled={loading}&gt;\n        {loading ? &quot;...&quot; : &quot;Αναζήτηση&quot;}\n      &lt;/button&gt;\n    &lt;/form&gt;\n  );\n}\n\nexport default SearchBar;\n</code></pre>\n<p><strong>Έννοιες:</strong></p>\n<ul>\n<li><strong>Component:</strong> μια συνάρτηση που επιστρέφει κομμάτι διεπαφής (JSX).</li>\n<li><strong>Props:</strong> τιμές που περνάει ο «γονέας» στο component (<code>onSearch</code>, <code>loading</code>).</li>\n<li><strong>State:</strong> το <code>useState</code> κρατά το κείμενο που πληκτρολογεί ο χρήστης.</li>\n<li>Το <code>event.preventDefault()</code> εμποδίζει την προεπιλεγμένη επαναφόρτωση της φόρμας.</li>\n</ul>',
      },
      {
        title: "9. Η κάρτα καιρού: WeatherCard.jsx",
        content:
          '<p>Δημιουργήστε το <code>src/components/WeatherCard.jsx</code>. Αντιστοιχεί στην κάρτα της εικόνας, με επιπλέον στοιχεία:</p>\n<pre><code class="language-jsx">// Βοηθητικές συναρτήσεις μορφοποίησης\nconst msToKmh = (ms) =&gt; Math.round(ms * 3.6);\n\nconst formatTime = (unixSeconds, timezoneOffset) =&gt; {\n  // Μετατροπή στην τοπική ώρα της πόλης (το API δίνει offset σε δευτερόλεπτα)\n  const date = new Date((unixSeconds + timezoneOffset) * 1000);\n  const h = String(date.getUTCHours()).padStart(2, &quot;0&quot;);\n  const m = String(date.getUTCMinutes()).padStart(2, &quot;0&quot;);\n  return `${h}:${m}`;\n};\n\nfunction Detail({ icon, label, value }) {\n  return (\n    &lt;div className=&quot;detail&quot;&gt;\n      &lt;span className=&quot;detail-icon&quot; aria-hidden=&quot;true&quot;&gt;{icon}&lt;/span&gt;\n      &lt;span className=&quot;detail-label&quot;&gt;{label}&lt;/span&gt;\n      &lt;strong&gt;{value}&lt;/strong&gt;\n    &lt;/div&gt;\n  );\n}\n\nfunction WeatherCard({ data }) {\n  const { name, sys, main, weather, wind, visibility, timezone } = data;\n  const condition = weather[0];\n\n  return (\n    &lt;div className=&quot;weather-card&quot;&gt;\n      &lt;img\n        className=&quot;weather-icon&quot;\n        src={`https://openweathermap.org/img/wn/${condition.icon}@4x.png`}\n        alt={condition.description}\n      /&gt;\n\n      &lt;h1 className=&quot;temp&quot;&gt;{Math.round(main.temp)}°C&lt;/h1&gt;\n      &lt;p className=&quot;description&quot;&gt;{condition.description}&lt;/p&gt;\n\n      &lt;div className=&quot;location&quot;&gt;\n        &lt;span aria-hidden=&quot;true&quot;&gt;📍&lt;/span&gt;\n        &lt;span&gt;{name}, {sys.country}&lt;/span&gt;\n      &lt;/div&gt;\n\n      &lt;div className=&quot;details&quot;&gt;\n        &lt;Detail icon=&quot;💧&quot; label=&quot;Υγρασία&quot; value={`${main.humidity}%`} /&gt;\n        &lt;Detail icon=&quot;💨&quot; label=&quot;Άνεμος&quot; value={`${msToKmh(wind.speed)} km/h`} /&gt;\n      &lt;/div&gt;\n\n      {/* Επιπλέον πληροφοριακά στοιχεία */}\n      &lt;div className=&quot;details extra&quot;&gt;\n        &lt;Detail icon=&quot;🌡️&quot; label=&quot;Αίσθηση&quot; value={`${Math.round(main.feels_like)}°C`} /&gt;\n        &lt;Detail\n          icon=&quot;↕️&quot;\n          label=&quot;Ελ. / Μεγ.&quot;\n          value={`${Math.round(main.temp_min)}° / ${Math.round(main.temp_max)}°`}\n        /&gt;\n        &lt;Detail icon=&quot;🧭&quot; label=&quot;Πίεση&quot; value={`${main.pressure} hPa`} /&gt;\n        &lt;Detail icon=&quot;👁️&quot; label=&quot;Ορατότητα&quot; value={`${(visibility / 1000).toFixed(1)} km`} /&gt;\n        &lt;Detail icon=&quot;🌅&quot; label=&quot;Ανατολή&quot; value={formatTime(sys.sunrise, timezone)} /&gt;\n        &lt;Detail icon=&quot;🌇&quot; label=&quot;Δύση&quot; value={formatTime(sys.sunset, timezone)} /&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  );\n}\n\nexport default WeatherCard;\n</code></pre>\n<p><strong>Σημεία που αξίζει να προσέξετε:</strong></p>\n<ul>\n<li>Το API δίνει τον άνεμο σε <strong>m/s</strong>, γι\' αυτό πολλαπλασιάζουμε επί 3,6 για να πάρουμε <strong>km/h</strong>.</li>\n<li>Το εικονίδιο καιρού έρχεται έτοιμο από το OpenWeatherMap (<code>.../img/wn/{κωδικός}@4x.png</code>).</li>\n<li>Οι ώρες ανατολής και δύσης δίνονται ως Unix timestamp. Προσθέτουμε το <code>timezone</code> της πόλης για να δείξουμε την <strong>τοπική</strong> της ώρα.</li>\n<li>Το μικρό component <code>Detail</code> επαναχρησιμοποιείται για κάθε στοιχείο.</li>\n</ul>',
      },
      {
        title: "10. Το κύριο component: App.jsx",
        content:
          '<p>Αντικαταστήστε όλο το περιεχόμενο του <code>src/App.jsx</code>:</p>\n<pre><code class="language-jsx">import { useState, useEffect } from &quot;react&quot;;\nimport SearchBar from &quot;./components/SearchBar&quot;;\nimport WeatherCard from &quot;./components/WeatherCard&quot;;\nimport { fetchWeather } from &quot;./services/weatherApi&quot;;\nimport &quot;./App.css&quot;;\n\nfunction App() {\n  const [weather, setWeather] = useState(null); // τα δεδομένα καιρού\n  const [loading, setLoading] = useState(false); // φόρτωση σε εξέλιξη;\n  const [error, setError] = useState(&quot;&quot;); // μήνυμα σφάλματος\n\n  async function handleSearch(city) {\n    setLoading(true);\n    setError(&quot;&quot;);\n    try {\n      const data = await fetchWeather(city);\n      setWeather(data);\n      localStorage.setItem(&quot;lastCity&quot;, city); // θυμόμαστε την τελευταία πόλη\n    } catch (err) {\n      setError(err.message);\n    } finally {\n      setLoading(false);\n    }\n  }\n\n  // Τρέχει μία φορά όταν ανοίγει η εφαρμογή\n  useEffect(() =&gt; {\n    handleSearch(localStorage.getItem(&quot;lastCity&quot;) || &quot;Athens&quot;);\n  }, []);\n\n  return (\n    &lt;main className=&quot;app&quot;&gt;\n      &lt;SearchBar onSearch={handleSearch} loading={loading} /&gt;\n      {error &amp;&amp; &lt;p className=&quot;error&quot;&gt;{error}&lt;/p&gt;}\n      {loading &amp;&amp; !weather &amp;&amp; &lt;p className=&quot;info&quot;&gt;Φόρτωση...&lt;/p&gt;}\n      {weather &amp;&amp; &lt;WeatherCard data={weather} /&gt;}\n    &lt;/main&gt;\n  );\n}\n\nexport default App;\n</code></pre>\n<p><strong>Τι συμβαίνει:</strong></p>\n<ul>\n<li>Τρία <strong>states</strong>: <code>weather</code> (δεδομένα), <code>loading</code> (φόρτωση), <code>error</code> (μήνυμα σφάλματος).</li>\n<li>Η <code>handleSearch</code> καλεί το API και ενημερώνει τα states. Το <code>try/catch/finally</code> χειρίζεται σφάλματα.</li>\n<li>Το <code>useEffect</code> με κενό πίνακα <code>[]</code> τρέχει <strong>μία φορά</strong> κατά το άνοιγμα και φορτώνει την τελευταία πόλη (ή την Αθήνα).</li>\n<li>Το <code>localStorage</code> θυμάται την τελευταία αναζήτηση στον browser.</li>\n</ul>',
      },
      {
        title: "11. Η εμφάνιση: CSS",
        content:
          '<p>Η κάρτα χρησιμοποιεί το ίδιο διαγώνιο διαβάθμισμα (gradient) με την εικόνα: <code>#4facfe</code> προς <code>#00f2fe</code>.</p>\n<p>Αντικαταστήστε το περιεχόμενο του <code>src/index.css</code>:</p>\n<pre><code class="language-css">* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  min-height: 100vh;\n  font-family: &quot;Segoe UI&quot;, system-ui, sans-serif;\n  background: #ffe600;\n  background-image: radial-gradient(circle at 20% 10%, #fff27a 0, transparent 40%),\n    radial-gradient(circle at 90% 90%, #6ec6ff 0, transparent 35%);\n  display: flex;\n  justify-content: center;\n}\n</code></pre>\n<p>και του <code>src/App.css</code>:</p>\n<pre><code class="language-css">.app {\n  width: 100%;\n  max-width: 380px;\n  padding: 32px 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n}\n\n/* --- Αναζήτηση --- */\n.search-bar {\n  display: flex;\n  gap: 8px;\n  width: 100%;\n}\n.search-bar input {\n  flex: 1;\n  padding: 12px 14px;\n  border: none;\n  border-radius: 12px;\n  font-size: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.search-bar button {\n  padding: 12px 16px;\n  border: none;\n  border-radius: 12px;\n  background: #1d4ed8;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n.search-bar button:disabled {\n  opacity: 0.6;\n  cursor: wait;\n}\n\n/* --- Κάρτα καιρού --- */\n.weather-card {\n  width: 100%;\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  color: #fff;\n  border-radius: 20px;\n  padding: 24px 20px;\n  text-align: center;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);\n}\n.weather-icon {\n  width: 120px;\n  height: 120px;\n  object-fit: contain;\n}\n.temp {\n  font-size: 64px;\n  margin: 0;\n}\n.description {\n  margin: 4px 0 14px;\n  font-size: 22px;\n  text-transform: capitalize;\n}\n.location {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 6px;\n  font-size: 18px;\n  margin-bottom: 18px;\n}\n\n/* --- Λεπτομέρειες --- */\n.details {\n  display: flex;\n  justify-content: space-around;\n  border-top: 1px solid rgba(255, 255, 255, 0.35);\n  padding-top: 16px;\n  margin-top: 8px;\n}\n.detail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n}\n.detail-icon {\n  font-size: 26px;\n}\n.detail-label {\n  font-size: 14px;\n  opacity: 0.9;\n}\n.detail strong {\n  font-size: 20px;\n}\n\n.details.extra {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px 8px;\n}\n.extra .detail-icon {\n  font-size: 20px;\n}\n.extra .detail strong {\n  font-size: 15px;\n}\n.extra .detail-label {\n  font-size: 12px;\n}\n\n/* --- Μηνύματα --- */\n.error {\n  background: #fee2e2;\n  color: #991b1b;\n  padding: 10px 14px;\n  border-radius: 10px;\n  margin: 0;\n  width: 100%;\n}\n.info {\n  color: #333;\n}\n</code></pre>\n<p>Το <code>display: flex</code> και το <code>grid</code> τακτοποιούν τα στοιχεία σε σειρές και στήλες. Η εφαρμογή προσαρμόζεται και σε κινητά, γιατί η κάρτα έχει <code>max-width</code> και <code>width: 100%</code>.</p>',
      },
      {
        title: "12. Εκτέλεση και δοκιμή",
        content:
          '<p>Στο τερματικό:</p>\n<pre><code class="language-bash">npm run dev\n</code></pre>\n<p>Ανοίξτε τη διεύθυνση που εμφανίζεται (συνήθως <a href="http://localhost:5173">http://localhost:5173</a>).</p>\n<p><strong>Δοκιμές:</strong></p>\n<ol>\n<li>Πρέπει να φορτώσει ο καιρός της Αθήνας.</li>\n<li>Αναζητήστε <code>Nairobi</code>, <code>Thessaloniki</code>, <code>London</code>.</li>\n<li>Γράψτε μια πόλη που δεν υπάρχει (<code>asdfgh</code>) και ελέγξτε ότι εμφανίζεται μήνυμα σφάλματος.</li>\n<li>Κάντε ανανέωση της σελίδας και δείτε ότι θυμάται την τελευταία πόλη.</li>\n</ol>\n<p>Αν αλλάξετε το <code>.env</code>, σταματήστε τον server (<code>Ctrl + C</code>) και ξανατρέξτε <code>npm run dev</code>.</p>',
      },
      {
        title: "13. Δοκιμαστική κατασκευή (build)",
        content:
          '<p>Πριν δημοσιεύσουμε, βεβαιωνόμαστε ότι το project «χτίζεται» σωστά:</p>\n<pre><code class="language-bash">npm run build\n</code></pre>\n<p>Δημιουργείται ο φάκελος <code>dist</code> με τα τελικά αρχεία. Αυτός ο φάκελος <strong>δεν</strong> ανεβαίνει στο GitHub (είναι ήδη στο <code>.gitignore</code>), γιατί το Netlify θα τον φτιάξει μόνο του.</p>\n<p>Δημιουργήστε στη ρίζα το αρχείο <code>netlify.toml</code>, που λέει στο Netlify πώς να χτίσει:</p>\n<pre><code class="language-toml">[build]\n  command = &quot;npm run build&quot;\n  publish = &quot;dist&quot;\n</code></pre>',
      },
      {
        title: "14. Ρύθμιση του Git τοπικά",
        content:
          '<p>Το <strong>Git</strong> κρατά ιστορικό των αλλαγών του κώδικα. Αν είναι η πρώτη φορά που το χρησιμοποιείτε, δηλώστε όνομα και email:</p>\n<pre><code class="language-bash">git config --global user.name &quot;Το Όνομά σας&quot;\ngit config --global user.email &quot;to-email@sas.gr&quot;\n</code></pre>\n<p>Στον φάκελο του project:</p>\n<pre><code class="language-bash">git init\ngit add .\ngit status\n</code></pre>\n<p>Στην έξοδο του <code>git status</code> ελέγξτε ότι <strong>δεν</strong> εμφανίζεται το <code>.env</code> ούτε το <code>node_modules</code>. Αν εμφανίζεται, ελέγξτε το <code>.gitignore</code>.</p>\n<p>Κάντε την πρώτη αποθήκευση (commit):</p>\n<pre><code class="language-bash">git commit -m &quot;Αρχική έκδοση εφαρμογής καιρού&quot;\ngit branch -M main\n</code></pre>',
      },
      {
        title: "15. Δημιουργία αποθετηρίου στο GitHub και ανέβασμα",
        content:
          '<ol>\n<li>Στο GitHub πατήστε <strong>New repository</strong>.</li>\n<li>Όνομα: <code>weather-app</code>. Επιλέξτε <strong>Public</strong> (ή Private).</li>\n<li><strong>Μην</strong> επιλέξετε «Add a README» ή <code>.gitignore</code>, γιατί υπάρχουν ήδη τοπικά.</li>\n<li>Πατήστε <strong>Create repository</strong>.</li>\n</ol>\n<p>Αντιγράψτε τη διεύθυνση του αποθετηρίου και τρέξτε (αλλάξτε το <code>ΟΝΟΜΑ_ΧΡΗΣΤΗ</code>):</p>\n<pre><code class="language-bash">git remote add origin https://github.com/ΟΝΟΜΑ_ΧΡΗΣΤΗ/weather-app.git\ngit push -u origin main\n</code></pre>\n<p>Στην αυθεντικοποίηση, το GitHub δεν δέχεται πια τον κωδικό λογαριασμού. Χρησιμοποιήστε <strong>Personal Access Token</strong> ή το <strong>GitHub Desktop / GitHub CLI</strong> (<code>gh auth login</code>).</p>\n<p>Ανανεώστε τη σελίδα του αποθετηρίου: πρέπει να δείτε τα αρχεία σας. Βεβαιωθείτε ότι <strong>δεν</strong> υπάρχει το αρχείο <code>.env</code>.</p>',
      },
      {
        title: "16. Σύνδεση του GitHub με το Netlify",
        content:
          "<ol>\n<li>Συνδεθείτε στο Netlify.</li>\n<li>Πατήστε <strong>Add new project</strong>, μετά <strong>Import an existing project</strong>.</li>\n<li>Επιλέξτε <strong>GitHub</strong> και δώστε άδεια πρόσβασης.</li>\n<li>Διαλέξτε το αποθετήριο <code>weather-app</code>.</li>\n<li>Οι ρυθμίσεις χτισίματος διαβάζονται από το <code>netlify.toml</code>. Ελέγξτε ότι: <strong>Build command</strong> = <code>npm run build</code>, <strong>Publish directory</strong> = <code>dist</code>.</li>\n</ol>\n<p><strong>Μην πατήσετε ακόμη Deploy</strong> πριν περάσετε το κλειδί API (επόμενο βήμα). Αν το πατήσατε, δεν πειράζει: θα ξαναδημοσιεύσετε μετά.</p>",
      },
      {
        title: "17. Προσθήκη του κλειδιού API στο Netlify",
        content:
          "<p>Το <code>.env</code> δεν υπάρχει στο GitHub, άρα το Netlify δεν έχει το κλειδί. Θα το δώσουμε στις ρυθμίσεις του:</p>\n<ol>\n<li>Στο Netlify: <strong>Project configuration</strong> και μετά <strong>Environment variables</strong>.</li>\n<li>Πατήστε <strong>Add a variable</strong>.</li>\n<li><strong>Key:</strong> <code>VITE_OPENWEATHER_API_KEY</code> (ακριβώς έτσι).</li>\n<li><strong>Value:</strong> το κλειδί σας.</li>\n<li>Αποθηκεύστε.</li>\n</ol>\n<p>Μετά ξεκινήστε νέο χτίσιμο: <strong>Deploys</strong> και μετά <strong>Trigger deploy</strong> και <strong>Deploy project</strong>.</p>\n<p><strong>Σημαντική σημείωση ασφαλείας:</strong> σε εφαρμογές που τρέχουν εξ ολοκλήρου στον browser, το κλειδί περιλαμβάνεται στον τελικό κώδικα και μπορεί να το δει όποιος ψάξει. Για αυτό το μάθημα είναι αποδεκτό (δωρεάν κλειδί). Για σοβαρές εφαρμογές, οι κλήσεις γίνονται από server ή από Netlify Function.</p>",
      },
      {
        title: "18. Έλεγχος και ενημερώσεις",
        content:
          '<p>Όταν ολοκληρωθεί το χτίσιμο, το Netlify δίνει διεύθυνση της μορφής <code>https://κάτι-τυχαίο.netlify.app</code>. Ανοίξτε την και δοκιμάστε την εφαρμογή.</p>\n<p>Μπορείτε να αλλάξετε το όνομα από <strong>Project configuration</strong> και <strong>Change project name</strong>.</p>\n<p><strong>Αυτόματη δημοσίευση:</strong> κάθε φορά που κάνετε αλλαγή στον κώδικα και ανεβάζετε στο GitHub, το Netlify ξαναχτίζει μόνο του:</p>\n<pre><code class="language-bash">git add .\ngit commit -m &quot;Περιγραφή της αλλαγής&quot;\ngit push\n</code></pre>',
      },
      {
        title: "19. Συχνά προβλήματα",
        content:
          "<ul>\n<li><strong>401 Unauthorized:</strong> το κλειδί είναι λάθος ή δεν έχει ενεργοποιηθεί ακόμη. Περιμένετε.</li>\n<li><strong>«Λείπει το κλειδί API»:</strong> λείπει το <code>.env</code> ή το πρόθεμα <code>VITE_</code>, ή δεν ξαναξεκινήσατε τον server μετά την αλλαγή.</li>\n<li><strong>Δουλεύει τοπικά αλλά όχι στο Netlify:</strong> δεν ορίσατε τη μεταβλητή στο Netlify ή δεν κάνατε νέο deploy μετά την προσθήκη της.</li>\n<li><strong>404 Η πόλη δεν βρέθηκε:</strong> δοκιμάστε αγγλική γραφή (<code>Athens</code>) ή προσθέστε χώρα (<code>Athens,GR</code>).</li>\n<li><strong><code>git push</code> απορρίπτεται:</strong> ελέγξτε την αυθεντικοποίηση (token) και τη διεύθυνση <code>origin</code> με <code>git remote -v</code>.</li>\n<li><strong>Λευκή σελίδα στο Netlify:</strong> ελέγξτε ότι το Publish directory είναι <code>dist</code>.</li>\n</ul>",
      },
      {
        title: "20. Ολοκλήρωση και επόμενα βήματα",
        content:
          "<p>Συγχαρητήρια! Φτιάξατε μια πλήρη εφαρμογή React, την ανεβάσατε στο GitHub και τη δημοσιεύσατε στο Netlify με αυτόματη ενημέρωση.</p>\n<p><strong>Ιδέες για επέκταση:</strong></p>\n<ul>\n<li>Εναλλαγή °C / °F</li>\n<li>Πρόγνωση 5 ημερών (endpoint <code>forecast</code>)</li>\n<li>Αναζήτηση με τη γεωγραφική θέση του χρήστη (<code>navigator.geolocation</code>)</li>\n<li>Λίστα αγαπημένων πόλεων</li>\n<li>Δυναμικό φόντο ανάλογα με τον καιρό (ήλιος, βροχή, νύχτα)</li>\n</ul>",
      },
    ],
  },

  wizard_00: {
    name: "Εγκατάσταση και έλεγχος προγραμμάτων",
    steps: [
      {
        title: "1. Εγκατάσταση Node.js",
        content:
          '<p>Κατεβάστε την έκδοση LTS του Node.js από το <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a> και ολοκληρώστε την εγκατάσταση. Το npm εγκαθίσταται μαζί με το Node.js.</p>',
      },
      {
        title: "2. Εγκατάσταση Visual Studio Code",
        content:
          '<p>Κατεβάστε και εγκαταστήστε το <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>. Θα χρησιμοποιηθεί για την επεξεργασία του κώδικα, των αρχείων JSON και των ρυθμίσεων του project.</p>',
      },
      {
        title: "3. Έλεγχος των εγκαταστάσεων",
        content:
          '<p>Ανοίξτε το μενού Έναρξη των Windows, πληκτρολογήστε <code>cmd</code> και ανοίξτε τη Γραμμή εντολών. Εκτελέστε μία-μία τις εντολές:</p><pre><code>node -v</code></pre><pre><code>npm -v</code></pre><p>Αν εμφανιστούν αριθμοί εκδόσεων, τα προγράμματα είναι διαθέσιμα. Για τις σύγχρονες εκδόσεις Vite ελέγξτε τις απαιτήσεις Node.js στην <a href="https://vite.dev/guide/" target="_blank" rel="noopener noreferrer">επίσημη τεκμηρίωση του Vite</a>.</p>',
      },
      {
        title: "4. Έλεγχος Git",
        content:
          '<p>Για να αποθηκεύετε τον κώδικα στο GitHub, εγκαταστήστε το <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">Git</a>. Ελέγξτε την εγκατάσταση με:</p><pre><code>git --version</code></pre><p>Αν εμφανιστεί έκδοση, το Git είναι διαθέσιμο από το terminal.</p>',
      },
      {
        title: "5. Προετοιμασία περιβάλλοντος",
        content:
          "<p>Ανοίξτε το Visual Studio Code. Από το μενού Terminal επιλέξτε New Terminal. Οι εντολές του project θα εκτελούνται από αυτό το terminal, μέσα στον φάκελο του έργου.</p>",
      },
    ],
  },

  wizard_01: {
    name: "Δημιουργία πρώτου React project με Vite",
    steps: [
      {
        title: "1. Δημιουργία project",
        content:
          "<p>Μεταβείτε από το terminal στον φάκελο όπου θέλετε να δημιουργηθεί η εφαρμογή και εκτελέστε:</p><pre><code>npm create vite@latest MyReactApp -- --template react</code></pre><p>Η εντολή δημιουργεί ένα νέο έργο με το όνομα <code>MyReactApp</code>, χρησιμοποιώντας React και JavaScript.</p>",
      },
      {
        title: "2. Μετάβαση στον φάκελο",
        content:
          "<p>Μεταβείτε στον φάκελο του project:</p><pre><code>cd MyReactApp</code></pre><p>Οι επόμενες εντολές πρέπει να εκτελούνται από αυτόν τον φάκελο, όπου βρίσκεται το <code>package.json</code>.</p>",
      },
      {
        title: "3. Εγκατάσταση εξαρτήσεων",
        content:
          "<p>Εκτελέστε:</p><pre><code>npm install</code></pre><p>Το npm εγκαθιστά τις βιβλιοθήκες που δηλώνονται στο <code>package.json</code>. Δημιουργείται ο φάκελος <code>node_modules</code>.</p>",
      },
      {
        title: "4. Άνοιγμα στο VS Code",
        content:
          "<p>Από το terminal εκτελέστε:</p><pre><code>code .</code></pre><p>Αν η εντολή δεν είναι διαθέσιμη, ανοίξτε χειροκίνητα το Visual Studio Code και επιλέξτε File → Open Folder. Επιλέξτε τον φάκελο <code>MyReactApp</code>.</p>",
      },
      {
        title: "5. Εκκίνηση εφαρμογής",
        content:
          "<p>Στο terminal του project εκτελέστε:</p><pre><code>npm run dev</code></pre><p>Ο Vite θα εμφανίσει μια τοπική διεύθυνση, συνήθως <code>http://localhost:5173/</code>. Ανοίξτε τη διεύθυνση στον browser για να δείτε την εφαρμογή.</p>",
      },
      {
        title: "6. Πρώτος έλεγχος",
        content:
          "<p>Επιβεβαιώστε ότι εμφανίζεται η αρχική σελίδα React. Αφήστε το terminal ανοικτό όσο λειτουργεί ο development server. Για διακοπή, πατήστε <code>Ctrl + C</code>.</p>",
      },
    ],
  },

  wizard_02: {
    name: "Κατανόηση της δομής αρχείων React",
    steps: [
      {
        title: "1. Το αρχείο index.html",
        content:
          '<p>Το <code>index.html</code> βρίσκεται στη ρίζα του project. Περιέχει τη βασική HTML σελίδα και το στοιχείο <code>&lt;div id="root"&gt;&lt;/div&gt;</code>, μέσα στο οποίο εμφανίζεται η εφαρμογή React.</p>',
      },
      {
        title: "2. Το αρχείο main.jsx",
        content:
          "<p>Το <code>main.jsx</code> είναι το σημείο εισόδου της εφαρμογής. Εισάγει το κεντρικό component και το CSS και συνδέει τη React με το στοιχείο root μέσω της μεθόδου <code>createRoot()</code>.</p>",
      },
      {
        title: "3. Το αρχείο App.jsx",
        content:
          "<p>Το <code>App.jsx</code> περιέχει το βασικό component της εφαρμογής. Εδώ οργανώνονται η διεπαφή, τα στοιχεία της σελίδας και οι λειτουργίες που χρειάζεται ο χρήστης.</p>",
      },
      {
        title: "4. Τα αρχεία CSS",
        content:
          "<p>Τα αρχεία CSS καθορίζουν χρώματα, αποστάσεις, γραμματοσειρές, διατάξεις και προσαρμογή της εφαρμογής σε διαφορετικά μεγέθη οθόνης.</p>",
      },
      {
        title: "5. Τα αρχεία JSON",
        content:
          "<p>Τα αρχεία JSON μπορούν να περιέχουν δομημένα δεδομένα, όπως ομάδες συνδέσμων, ονόματα, URLs και ρυθμίσεις. Η εφαρμογή πρέπει να τα εισάγει ή να τα φορτώνει ρητά για να τα χρησιμοποιήσει.</p>",
      },
      {
        title: "6. Το package.json",
        content:
          "<p>Το <code>package.json</code> περιέχει πληροφορίες για το project, τις εξαρτήσεις και τα διαθέσιμα scripts, όπως τα <code>npm run dev</code> και <code>npm run build</code>.</p>",
      },
    ],
  },

  wizard_03: {
    name: "Σειρά εκτέλεσης στη React",
    steps: [
      {
        title: "1. Φόρτωση index.html",
        content:
          "<p>Ο browser ζητά την αρχική σελίδα από τον Vite. Το <code>index.html</code> περιέχει το στοιχείο root και τη δήλωση φόρτωσης του <code>main.jsx</code>.</p>",
      },
      {
        title: "2. Φόρτωση main.jsx",
        content:
          "<p>Ο browser φορτώνει το <code>main.jsx</code>, το οποίο εισάγει τα απαραίτητα modules και το component <code>App</code>.</p><pre><code>import { createRoot } from 'react-dom/client';\nimport App from './App.jsx';\nimport './styles.css';</code></pre>",
      },
      {
        title: "3. Δημιουργία React root",
        content:
          "<p>Η μέθοδος <code>createRoot()</code> συνδέει τη React με το στοιχείο HTML που έχει id <code>root</code>.</p><pre><code>createRoot(document.getElementById('root')).render(&lt;App /&gt;);</code></pre>",
      },
      {
        title: "4. Εκτέλεση App component",
        content:
          "<p>Η React εκτελεί το component <code>App</code> και επεξεργάζεται τα JSX στοιχεία που επιστρέφει, μαζί με τα components που αυτό χρησιμοποιεί.</p>",
      },
      {
        title: "5. Εμφάνιση περιεχομένου",
        content:
          "<p>Η React ενημερώνει το DOM του browser σύμφωνα με το αποτέλεσμα των components. Ο χρήστης βλέπει πλέον την εφαρμογή και μπορεί να αλληλεπιδρά με αυτήν.</p>",
      },
      {
        title: "6. Ενημέρωση της διεπαφής",
        content:
          "<p>Όταν αλλάζει το state ή τα props ενός component, η React επανυπολογίζει το απαιτούμενο περιεχόμενο και ενημερώνει την εμφάνιση όπου χρειάζεται.</p>",
      },
    ],
  },

  wizard_04: {
    name: "Επεξεργασία JSX, CSS και JSON",
    steps: [
      {
        title: "1. Επεξεργασία JSX",
        content:
          "<p>Ανοίξτε το <code>App.jsx</code> στο VS Code. Το JSX περιγράφει τη δομή της διεπαφής με σύνταξη που μοιάζει με HTML και ενσωματώνεται σε JavaScript.</p>",
      },
      {
        title: "2. Επεξεργασία CSS",
        content:
          "<p>Ανοίξτε το αρχείο CSS που χρησιμοποιεί το component. Αλλάξτε τις ιδιότητες εμφάνισης και αποθηκεύστε. Ο Vite συνήθως ενημερώνει αυτόματα την τοπική εφαρμογή.</p>",
      },
      {
        title: "3. Επεξεργασία JSON",
        content:
          "<p>Ανοίξτε το αρχείο δεδομένων, για παράδειγμα <code>data/appData.json</code>. Αλλάξτε τις τιμές που θέλετε, χωρίς να αφαιρέσετε πεδία τα οποία χρησιμοποιεί ο κώδικας.</p>",
      },
      {
        title: "4. Έλεγχος σύνταξης JSON",
        content:
          "<p>Χρησιμοποιήστε διπλά εισαγωγικά για ονόματα πεδίων και συμβολοσειρές. Ελέγξτε ότι όλα τα άγκιστρα και οι αγκύλες κλείνουν σωστά και ότι δεν υπάρχουν περιττά κόμματα.</p>",
      },
      {
        title: "5. Αποθήκευση αλλαγών",
        content:
          "<p>Πατήστε <code>Ctrl + S</code>. Ελέγξτε την εφαρμογή στον browser, εφόσον ο development server λειτουργεί. Αν τα δεδομένα φορτώνονται μέσω HTTP, μπορεί να χρειαστεί ανανέωση της σελίδας.</p>",
      },
    ],
  },

  wizard_05: {
    name: "Έλεγχος και build εφαρμογής",
    steps: [
      {
        title: "1. Άνοιγμα terminal",
        content:
          "<p>Στο VS Code επιλέξτε Terminal → New Terminal. Επιβεβαιώστε ότι βρίσκεστε στη ρίζα του project, όπου υπάρχει το <code>package.json</code>.</p>",
      },
      {
        title: "2. Εγκατάσταση εξαρτήσεων",
        content:
          "<p>Αν δεν έχουν εγκατασταθεί οι βιβλιοθήκες ή αν μόλις κατεβάσατε το project, εκτελέστε:</p><pre><code>npm install</code></pre>",
      },
      {
        title: "3. Εκκίνηση development server",
        content:
          "<p>Εκτελέστε:</p><pre><code>npm run dev</code></pre><p>Ανοίξτε τη διεύθυνση που εμφανίζει το terminal και δοκιμάστε τις λειτουργίες της εφαρμογής.</p>",
      },
      {
        title: "4. Δημιουργία production build",
        content:
          "<p>Σταματήστε τον development server αν χρειάζεται και εκτελέστε:</p><pre><code>npm run build</code></pre><p>Ο Vite δημιουργεί τον φάκελο <code>dist</code> με τα αρχεία της έκδοσης παραγωγής.</p>",
      },
      {
        title: "5. Αντιμετώπιση σφαλμάτων",
        content:
          "<p>Αν το build αποτύχει, διαβάστε το πρώτο ουσιαστικό μήνυμα σφάλματος. Ελέγξτε εισαγωγές αρχείων, ονόματα και διαδρομές, εξαρτήσεις και σύνταξη JSX ή JSON. Οι προειδοποιήσεις δεν σημαίνουν απαραίτητα αποτυχία του build.</p>",
      },
      {
        title: "6. Έλεγχος τελικής έκδοσης",
        content:
          "<p>Επιβεβαιώστε ότι δημιουργήθηκε το <code>dist/index.html</code> και ότι το build ολοκληρώθηκε επιτυχώς. Η ύπαρξη του <code>dist</code> δεν σημαίνει ότι η εφαρμογή έχει ήδη δημοσιευτεί στο διαδίκτυο.</p>",
      },
    ],
  },

  wizard_06: {
    name: "Ανέβασμα project στο GitHub",
    steps: [
      {
        title: "1. Δημιουργία repository",
        content:
          "<p>Συνδεθείτε στο GitHub και δημιουργήστε ένα repository. Αν το project υπάρχει ήδη τοπικά, ελέγξτε αν το απομακρυσμένο repository είναι άδειο ή περιέχει ήδη αρχεία.</p>",
      },
      {
        title: "2. Έλεγχος τοπικού repository",
        content:
          "<p>Ανοίξτε terminal στη ρίζα του project και εκτελέστε:</p><pre><code>git status</code></pre><p>Αν το Git είναι ήδη αρχικοποιημένο, μην εκτελέσετε ξανά <code>git init</code> χωρίς λόγο.</p>",
      },
      {
        title: "3. Ρύθμιση remote",
        content:
          "<p>Ελέγξτε τις απομακρυσμένες διευθύνσεις:</p><pre><code>git remote -v</code></pre><p>Αν χρειάζεται, προσθέστε το σωστό repository με <code>git remote add origin URL</code> ή διορθώστε το υπάρχον με <code>git remote set-url origin URL</code>.</p>",
      },
      {
        title: "4. Προσθήκη αρχείων",
        content:
          "<p>Ελέγξτε το <code>.gitignore</code> και βεβαιωθείτε ότι εξαιρούνται φάκελοι όπως <code>node_modules</code> και <code>dist</code>, όταν δεν χρειάζεται να παρακολουθούνται. Προσθέστε τα επιθυμητά αρχεία με:</p><pre><code>git add .</code></pre>",
      },
      {
        title: "5. Δημιουργία commit",
        content:
          '<p>Καταγράψτε τις αλλαγές:</p><pre><code>git commit -m "Initial project commit"</code></pre><p>Αν το Git ζητήσει ρύθμιση ονόματος και email, ορίστε τα στοιχεία του λογαριασμού που θέλετε να χρησιμοποιείτε στα commits.</p>',
      },
      {
        title: "6. Push στο GitHub",
        content:
          "<p>Ορίστε το branch και στείλτε τις αλλαγές:</p><pre><code>git branch -M main\ngit push -u origin main</code></pre><p>Αν το remote έχει ήδη διαφορετικό ιστορικό, ελέγξτε πρώτα τις απομακρυσμένες αλλαγές αντί να χρησιμοποιήσετε force push.</p>",
      },
      {
        title: "7. Επιβεβαίωση",
        content:
          "<p>Ανοίξτε το repository στο GitHub και επιβεβαιώστε ότι εμφανίζονται τα αρχεία και το σωστό τελευταίο commit.</p>",
      },
    ],
  },

  wizard_07: {
    name: "Καθημερινή ενημέρωση κώδικα με Git",
    steps: [
      {
        title: "1. Έλεγχος κατάστασης",
        content:
          "<p>Πριν ξεκινήσετε, εκτελέστε:</p><pre><code>git status</code></pre><p>Ελέγξτε το branch και αν υπάρχουν εκκρεμείς αλλαγές.</p>",
      },
      {
        title: "2. Επεξεργασία αρχείων",
        content:
          "<p>Αλλάξτε τα αρχεία από το VS Code και αποθηκεύστε τα. Δοκιμάστε τοπικά τις αλλαγές πριν τις δημοσιεύσετε.</p>",
      },
      {
        title: "3. Έλεγχος αλλαγών",
        content:
          "<p>Εκτελέστε <code>git diff</code> για να δείτε τις αλλαγές σε αρχεία που δεν έχουν γίνει stage. Χρησιμοποιήστε <code>git status</code> για να ελέγξετε ποια αρχεία θα συμπεριληφθούν στο commit.</p>",
      },
      {
        title: "4. Προσθήκη συγκεκριμένων αρχείων",
        content:
          "<p>Για παράδειγμα, αν αλλάξατε μόνο το JSON, εκτελέστε:</p><pre><code>git add data/appData.json</code></pre><p>Η στοχευμένη προσθήκη βοηθά να μη συμπεριληφθούν κατά λάθος άλλα αρχεία.</p>",
      },
      {
        title: "5. Commit αλλαγών",
        content:
          '<p>Εκτελέστε:</p><pre><code>git commit -m "Describe the change"</code></pre><p>Χρησιμοποιήστε ένα σύντομο και περιγραφικό μήνυμα.</p>',
      },
      {
        title: "6. Push στο remote",
        content:
          "<p>Εκτελέστε:</p><pre><code>git push origin main</code></pre><p>Ελέγξτε ότι η εντολή ολοκληρώθηκε χωρίς σφάλμα.</p>",
      },
      {
        title: "7. Έλεγχος deploy",
        content:
          "<p>Αν το Netlify είναι συνδεδεμένο με το branch <code>main</code>, ελέγξτε αν ξεκίνησε νέο deploy. Μετά την επιτυχή δημοσίευση, δοκιμάστε τη δημόσια εφαρμογή.</p>",
      },
    ],
  },

  wizard_08: {
    name: "Δημοσίευση React εφαρμογής στο Netlify",
    steps: [
      {
        title: "1. Σύνδεση με GitHub",
        content:
          '<p>Ανοίξτε το <a href="https://app.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>, δημιουργήστε ένα site ή ανοίξτε το υπάρχον και συνδέστε το με το σωστό GitHub repository.</p>',
      },
      {
        title: "2. Επιλογή branch",
        content:
          "<p>Επιβεβαιώστε ότι το Netlify παρακολουθεί το σωστό repository και το branch <code>main</code>. Λανθασμένη σύνδεση μπορεί να δημοσιεύει παλιότερο κώδικα.</p>",
      },
      {
        title: "3. Ρυθμίσεις build",
        content:
          "<p>Για ένα τυπικό project React με Vite χρησιμοποιήστε build command <code>npm run build</code> και publish directory <code>dist</code>. Το base directory συνήθως μένει κενό όταν το <code>package.json</code> βρίσκεται στη ρίζα του repository.</p>",
      },
      {
        title: "4. Εκκίνηση deploy",
        content:
          "<p>Κάντε push τις αλλαγές στο branch που παρακολουθεί το Netlify. Συνήθως ξεκινά αυτόματο deploy. Αν χρειάζεται, χρησιμοποιήστε το Trigger deploy από την ενότητα Deploys.</p>",
      },
      {
        title: "5. Έλεγχος build log",
        content:
          "<p>Ανοίξτε το deploy και ελέγξτε το log. Αν αποτύχει, εντοπίστε το πρώτο ουσιαστικό σφάλμα. Μην αλλάζετε τυχαία ρυθμίσεις πριν κατανοήσετε την αιτία.</p>",
      },
      {
        title: "6. Επιβεβαίωση δημοσίευσης",
        content:
          "<p>Όταν το deploy εμφανιστεί ως Published, ανοίξτε τη δημόσια διεύθυνση του site και ελέγξτε τις βασικές λειτουργίες.</p>",
      },
    ],
  },

  wizard_09: {
    name: "Ενημέρωση JSON και δημοσίευση στο Netlify",
    steps: [
      {
        title: "1. Άνοιγμα αρχείου δεδομένων",
        content:
          "<p>Ανοίξτε το <code>data/appData.json</code> στο VS Code. Εντοπίστε την ομάδα, τον σύνδεσμο ή την τιμή που θέλετε να αλλάξετε.</p>",
      },
      {
        title: "2. Επεξεργασία δεδομένων",
        content:
          "<p>Αλλάξτε τις επιθυμητές τιμές διατηρώντας τα ονόματα πεδίων και τη δομή που χρησιμοποιεί η εφαρμογή. Αποθηκεύστε με <code>Ctrl + S</code>.</p>",
      },
      {
        title: "3. Έλεγχος JSON",
        content:
          "<p>Ελέγξτε εισαγωγικά, κόμματα, αγκύλες και άγκιστρα. Μην προσθέτετε σχόλια μέσα στο JSON. Διατηρήστε τη μορφή URL και τους τύπους δεδομένων που αναμένει ο κώδικας.</p>",
      },
      {
        title: "4. Έλεγχος build",
        content:
          "<p>Εκτελέστε:</p><pre><code>npm run build</code></pre><p>Αν τα δεδομένα εισάγονται στον κώδικα κατά το build, η νέα έκδοση θα περιλαμβάνει τις αλλαγές. Αν το JSON φορτώνεται ξεχωριστά κατά την εκτέλεση, ελέγξτε και τη διαδρομή φόρτωσης.</p>",
      },
      {
        title: "5. Commit και push",
        content:
          '<p>Εκτελέστε:</p><pre><code>git add data/appData.json\ngit commit -m "Update app data"\ngit push origin main</code></pre><p>Αν τροποποιήσατε περισσότερα αρχεία, προσθέστε μόνο όσα θέλετε να συμπεριλάβετε.</p>',
      },
      {
        title: "6. Έλεγχος ενημέρωσης",
        content:
          "<p>Περιμένετε το νέο deploy στο Netlify και ανοίξτε το site. Ελέγξτε αν εμφανίζονται τα νέα δεδομένα. Αν όχι, ελέγξτε αν το deploy είναι επιτυχές, αν φορτώνεται το σωστό αρχείο και αν υπάρχει caching.</p>",
      },
    ],
  },

  wizard_10: {
    name: "Διάγνωση σφάλματος 404 στο Netlify",
    steps: [
      {
        title: "1. Έλεγχος δημοσιευμένου deploy",
        content:
          "<p>Ανοίξτε την ενότητα Deploys και βεβαιωθείτε ότι υπάρχει επιτυχημένο deploy με την αναμενόμενη έκδοση του κώδικα.</p>",
      },
      {
        title: "2. Έλεγχος publish directory",
        content:
          "<p>Για τυπικό Vite project, ο φάκελος δημοσίευσης είναι <code>dist</code>. Ελέγξτε ότι το Netlify δεν δημοσιεύει κατά λάθος τον φάκελο πηγαίου κώδικα ή άλλον κενό φάκελο.</p>",
      },
      {
        title: "3. Έλεγχος αρχείου index.html",
        content:
          "<p>Ελέγξτε ότι υπάρχει το <code>dist/index.html</code> μετά την εκτέλεση του <code>npm run build</code>. Το αρχείο αυτό είναι συνήθως η αρχική σελίδα της εφαρμογής Vite.</p>",
      },
      {
        title: "4. Έλεγχος διαδρομών εφαρμογής",
        content:
          "<p>Αν η αρχική σελίδα ανοίγει αλλά οι εσωτερικές διαδρομές εμφανίζουν 404, ελέγξτε αν χρειάζεται κανόνας ανακατεύθυνσης για SPA routing. Για React Router, μια συνηθισμένη ρύθμιση είναι το αρχείο <code>public/_redirects</code> με περιεχόμενο <code>/* /index.html 200</code>.</p>",
      },
      {
        title: "5. Νέο deploy",
        content:
          "<p>Αφού διορθώσετε τις ρυθμίσεις, κάντε push στο GitHub ή ενεργοποιήστε νέο deploy από το Netlify. Περιμένετε την επιτυχή ολοκλήρωση πριν δοκιμάσετε ξανά.</p>",
      },
    ],
  },

  wizard_11: {
    name: "Αντιμετώπιση σφάλματος Git submodule",
    steps: [
      {
        title: "1. Αναγνώριση μηνύματος",
        content:
          "<p>Το μήνυμα <code>No url found for submodule path 'src' in .gitmodules</code> υποδεικνύει ότι το Git έχει καταχωρίσει τον φάκελο <code>src</code> ως submodule χωρίς αντίστοιχη ρύθμιση URL.</p>",
      },
      {
        title: "2. Έλεγχος Git index",
        content:
          "<p>Εκτελέστε:</p><pre><code>git status\ngit ls-files --stage src</code></pre><p>Η λειτουργία <code>160000</code> υποδεικνύει καταχώριση τύπου submodule.</p>",
      },
      {
        title: "3. Έλεγχος περιεχομένου",
        content:
          "<p>Ελέγξτε αν το <code>src</code> περιέχει πραγματικά αρχεία κώδικα και εσωτερικό φάκελο <code>.git</code>. Δημιουργήστε αντίγραφο ασφαλείας πριν αλλάξετε την καταχώριση.</p>",
      },
      {
        title: "4. Αφαίρεση παλιάς αναφοράς",
        content:
          "<p>Αν ο φάκελος πρέπει να είναι κανονικός, αφαιρέστε την αναφορά από το index με <code>git rm --cached src</code>. Η εντολή αφαιρεί την καταχώριση από το Git index και όχι τα τοπικά αρχεία.</p>",
      },
      {
        title: "5. Μετατροπή σε κανονικό φάκελο",
        content:
          "<p>Αφού επιβεβαιώσετε το αντίγραφο ασφαλείας, αφαιρέστε τα εσωτερικά Git metadata από το <code>src</code> και προσθέστε τα αρχεία με <code>git add src/</code>. Ελέγξτε με <code>git status</code> ότι εμφανίζονται τα πραγματικά αρχεία.</p>",
      },
      {
        title: "6. Build και δημοσίευση",
        content:
          "<p>Εκτελέστε <code>npm run build</code>. Αν πετύχει, δημιουργήστε commit και στείλτε τη διόρθωση με <code>git push origin main</code>. Ελέγξτε το νέο deploy στο Netlify.</p>",
      },
    ],
  },

  wizard_12: {
    name: "Επίλυση προβλημάτων Git push και merge",
    steps: [
      {
        title: "1. Έλεγχος κατάστασης",
        content:
          "<p>Εκτελέστε <code>git status</code> για να δείτε αν υπάρχουν αλλαγές, συγκρούσεις ή εκκρεμής συγχώνευση.</p>",
      },
      {
        title: "2. Απόρριψη push",
        content:
          "<p>Αν το push απορριφθεί επειδή το remote περιέχει νεότερα commits, μην εκτελέσετε αμέσως force push. Οι απομακρυσμένες αλλαγές μπορεί να περιέχουν αρχεία που πρέπει να διατηρηθούν.</p>",
      },
      {
        title: "3. Ενσωμάτωση απομακρυσμένων αλλαγών",
        content:
          "<p>Ελέγξτε το ιστορικό και ενσωματώστε τις απομακρυσμένες αλλαγές με κατάλληλη μέθοδο, όπως <code>git pull --rebase origin main</code> όταν ταιριάζει στο ιστορικό. Αν πρόκειται για ανεξάρτητα ιστορικά, απαιτείται προσεκτική συγχώνευση.</p>",
      },
      {
        title: "4. Αν εμφανιστούν conflicts",
        content:
          "<p>Ανοίξτε τα αρχεία που αναφέρονται ως συγκρουόμενα. Επιλέξτε και συνδυάστε τις σωστές αλλαγές, αφαιρέστε τους δείκτες σύγκρουσης και αποθηκεύστε. Έπειτα προσθέστε τα διορθωμένα αρχεία στο Git.</p>",
      },
      {
        title: "5. Ολοκλήρωση merge",
        content:
          "<p>Αν το Git ανοίξει editor για το μήνυμα συγχώνευσης, διατηρήστε ένα κατάλληλο μήνυμα και αποθηκεύστε το. Στον Vim, χρησιμοποιήστε <code>Esc</code> και μετά <code>:wq</code>. Ελέγξτε το αποτέλεσμα με <code>git status</code>.</p>",
      },
      {
        title: "6. Push και επιβεβαίωση",
        content:
          "<p>Όταν η κατάσταση είναι καθαρή και η συγχώνευση ολοκληρωμένη, εκτελέστε <code>git push origin main</code>. Ελέγξτε ότι η εντολή ολοκληρώθηκε επιτυχώς.</p>",
      },
    ],
  },

  wizard_13: {
    name: "Δημιουργία και χρήση online wizard",
    steps: [
      {
        title: "1. Οργάνωση οδηγιών",
        content:
          "<p>Κάθε wizard έχει ένα μοναδικό κλειδί, ένα όνομα και έναν πίνακα <code>steps</code>. Κάθε βήμα περιλαμβάνει τίτλο και περιεχόμενο.</p>",
      },
      {
        title: "2. Δομή δεδομένων",
        content:
          "<p>Χρησιμοποιήστε τη δομή <code>{ name, steps }</code>. Κάθε στοιχείο του πίνακα βημάτων πρέπει να περιέχει τουλάχιστον <code>title</code> και <code>content</code>.</p>",
      },
      {
        title: "3. Περιεχόμενο βημάτων",
        content:
          "<p>Γράψτε σύντομες, σαφείς οδηγίες. Το περιεχόμενο μπορεί να περιλαμβάνει HTML, παραδείγματα εντολών και συνδέσμους, εφόσον ο online wizard υποστηρίζει και εμφανίζει με ασφάλεια αυτή τη μορφή.</p>",
      },
      {
        title: "4. Προσθήκη νέου wizard",
        content:
          "<p>Δημιουργήστε νέο μοναδικό κλειδί, όπως <code>wizard_14</code>, και προσθέστε τα βήματα στον πίνακα <code>allWizards</code>. Μην επαναχρησιμοποιείτε υπάρχον κλειδί, γιατί μπορεί να αντικαταστήσετε άλλον οδηγό.</p>",
      },
      {
        title: "5. Έλεγχος μορφής",
        content:
          "<p>Αν τα δεδομένα διατηρούνται σε αρχείο JavaScript, η σύνταξη μπορεί να είναι <code>const allWizards = { ... }</code>. Αν διατηρούνται σε αυστηρό αρχείο JSON, αφαιρέστε τη δήλωση <code>const</code> και χρησιμοποιήστε διπλά εισαγωγικά στα ονόματα των ιδιοτήτων.</p>",
      },
      {
        title: "6. Έλεγχος online εμφάνισης",
        content:
          "<p>Ελέγξτε ότι ο wizard διαβάζει το σωστό αρχείο δεδομένων, εμφανίζει τα βήματα με τη σωστή σειρά και ότι οι σύνδεσμοι και τα παραδείγματα λειτουργούν. Κάντε build και δημοσιεύστε τις αλλαγές όταν ολοκληρωθούν οι δοκιμές.</p>",
      },
    ],
  },

  wizard_14: {
    name: "Μετατροπή PowerPoint σε Markdown",
    steps: [
      {
        title: "1. Ανέβασμα αρχείου",
        content:
          "<p>Ανεβάστε το αρχείο <code>.pptx</code> στο Google Drive.</p>",
      },
      {
        title: "2. Άνοιγμα στο Google Slides",
        content:
          "<p>Ανοίξτε το αρχείο με τις Παρουσιάσεις Google και ελέγξτε ότι οι διαφάνειες εμφανίζονται σωστά.</p>",
      },
      {
        title: "3. Εξαγωγή σε Markdown",
        content:
          "<p>Χρησιμοποιήστε κατάλληλο εργαλείο ή πρόσθετο εξαγωγής που υποστηρίζει Markdown. Η διαθεσιμότητα και οι λειτουργίες των πρόσθετων μπορεί να αλλάζουν.</p>",
      },
      {
        title: "4. Έλεγχος αποτελέσματος",
        content:
          "<p>Ελέγξτε τίτλους, λίστες, συνδέσμους, εικόνες και τη σειρά των διαφανειών. Διορθώστε στοιχεία που δεν μεταφέρθηκαν σωστά.</p>",
      },
    ],
  },

  wizard_15: {
    name: "Μετατροπή Word σε Markdown",
    steps: [
      {
        title: "1. Προετοιμασία εγγράφου",
        content:
          "<p>Ανοίξτε το αρχείο Word <code>.docx</code> και ελέγξτε τις επικεφαλίδες, τις λίστες και τους πίνακες πριν από τη μετατροπή.</p>",
      },
      {
        title: "2. Μετατροπή",
        content:
          "<p>Χρησιμοποιήστε εργαλείο που υποστηρίζει εξαγωγή από DOCX σε Markdown. Επιλέξτε μέθοδο που ταιριάζει στη μορφοποίηση του εγγράφου.</p>",
      },
      {
        title: "3. Έλεγχος Markdown",
        content:
          "<p>Ελέγξτε τις επικεφαλίδες, τις λίστες, τους πίνακες, τις εικόνες και τους συνδέσμους. Η μετατροπή σύνθετης μορφοποίησης μπορεί να απαιτεί χειροκίνητες διορθώσεις.</p>",
      },
      {
        title: "4. Αποθήκευση",
        content:
          "<p>Αποθηκεύστε το αποτέλεσμα σε αρχείο <code>.md</code> και ανοίξτε το σε Markdown editor για τελικό έλεγχο.</p>",
      },
    ],
  },
  wizard_16: {
    name: "Σύνδεση τοπικού project με GitHub",
    steps: [
      {
        title: "1. Έλεγχος κατάστασης (Git Status)",
        content:
          "<p>Πριν ξεκινήσετε, ελέγξτε αν ο φάκελος είναι ήδη αποθέτηριο Git και δείτε ποια αρχεία έχουν τροποποιηθεί:</p><pre><code>git status</code></pre><p>Αν εμφανιστεί σφάλμα <em>fatal: not a git repository</em>, προχωρήστε στο επόμενο βήμα για αρχικοποίηση.</p>",
      },
      {
        title: "2. Αρχικοποίηση Git (Git Init)",
        content:
          "<p>Αν ο φάκελος δεν είναι repository, ενεργοποιήστε το Git τοπικά δημιουργώντας τον κρυφό φάκελο <code>.git</code>:</p><pre><code>git init</code></pre>",
      },
      {
        title: "3. Σύνδεση με το GitHub (Remote Add)",
        content:
          "<p>Συνδέστε τον τοπικό σας φάκελο με το απομακρυσμένο αποθετήριο στο GitHub, χρησιμοποιώντας το πλήρες URL του project σας:</p><pre><code>git remote add origin https://github.com</code></pre><p>Αν το link έχει οριστεί λάθος στο παρελθόν, διαγράψτε το πρώτα με <code>git remote remove origin</code>.</p>",
      },
      {
        title: "4. Έλεγχος της σύνδεσης (Remote -v)",
        content:
          "<p>Επιβεβαιώστε ότι η διεύθυνση URL του GitHub έχει αποθηκευτεί σωστά και ολοκληρωμένα:</p><pre><code>git remote -v</code></pre><p>Στην οθόνη πρέπει να εμφανιστούν δύο γραμμές (fetch και push) που καταλήγουν στο όνομα του project σας.</p>",
      },
      {
        title: "5. Ονομασία του Branch",
        content:
          "<p>Διασφαλίστε ότι το κεντρικό branch του project σας ονομάζεται <code>main</code>, ώστε να συμβαδίζει με τις προδιαγραφές του GitHub:</p><pre><code>git branch -M main</code></pre>",
      },
      {
        title: "6. Προετοιμασία αρχείων (Git Add)",
        content:
          "<p>Προσθέστε όλα τα νέα ή τροποποιημένα αρχεία (όπως το <code>data1.json</code>) στην αναμονή για το επόμενο commit:</p><pre><code>git add .</code></pre><p>Αν το Git αγνοεί κάποιο αρχείο, μπορείτε να το εξαναγκάσετε να το προσθέσει με <code>git add -f όνομα_αρχείου</code>.</p>",
      },
      {
        title: "7. Οριστικοποίηση αλλαγών (Git Commit)",
        content:
          '<p>Κλειδώστε τις αλλαγές σας τοπικά δημιουργώντας μια "αποστολή" με ένα σύντομο περιγραφικό μήνυμα:</p><pre><code>git commit -m "Upload all current files including data1.json"</code></pre>',
      },
      {
        title: "8. Ανέβασμα στο GitHub (Git Push)",
        content:
          "<p>Στείλτε τα αρχεία σας από τον υπολογιστή στο GitHub. Την πρώτη φορά, ή αν χρειάζεται συγχρονισμός ιστορικού, χρησιμοποιήστε εξαναγκασμό:</p><pre><code>git push -u origin main --force</code></pre><p>Στις επόμενες καθημερινές ενημερώσεις, θα γράφετε απλώς <code>git push origin main</code>.</p>",
      },
    ],
  },

  wizard_17: {
    name: "Οταν γίνεται αλλαγή στο τοπικό project και θέλουμε να την ανεβάσουμε στο GitHub",
    steps: [
      {
        title: "1. { Προσθήκη αρχείων στην αναμονή για commit } (Git add .)",
        content:
          "<p>Πριν ξεκινήσετε, ελέγξτε αν ο φάκελος είναι ήδη αποθέτηριο Git και δείτε ποια αρχεία έχουν τροποποιηθεί:</p><pre><code>git add . </code></pre><p>Αν εμφανιστεί σφάλμα <em>fatal: not a git repository</em>, προχωρήστε στο επόμενο βήμα για αρχικοποίηση.</p>",
      },
      {
        title: "2. Commit (Git Commit)",
        content:
          "<p>Αν ο φάκελος δεν είναι repository, ενεργοποιήστε το Git τοπικά δημιουργώντας τον κρυφό φάκελο <code> git commit -m 'Διόρθωση στο κεντράρισμα του ύμνου' </code>:</p><pre><code>git  commit -m 'Διόρθωση στο κεντράρισμα του ύμνου'</code></pre>",
      },
      {
        title: "3. (git push origin main)",
        content:
          "<p>Συνδέστε τον τοπικό σας φάκελο με το απομακρυσμένο αποθετήριο στο GitHub, χρησιμοποιώντας το πλήρες URL του project σας:</p><pre><code>git push origin main</code></pre><p>Αν το link έχει οριστεί λάθος στο παρελθόν, διαγράψτε το πρώτα με <code>git remote remove origin</code>.</p>",
      },
    ],
  },
};
