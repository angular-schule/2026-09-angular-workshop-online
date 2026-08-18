<img src="https://assets.angular.schule/header-intensivworkshop2.png">

#### **mit Ferdinand Malcher**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.

<!--
# 🎮 NEU: RxJS Playground

Du kannst dir entweder  
* den Code als ZIP-Datei herunterladen: [rxjs-playground.zip](XXX)<br>**oder**<br>
* dieses Repository per Git herunterladen und in den Ordner `rxjs-playground` wechseln.

```bash
cd rxjs-playground
npm install
ng serve
```

Öffne den Browser unter der URL [http://localhost:**4300**](http://localhost:4300) (!), um die Anwendung zu sehen.
Die Übungen befinden sich im Ordner `rxjs-playground/src/app/exercises/`.
-->


# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## 1.) Benötigte Software

1. **Node.js 22, 24 oder 26** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
   _oder_ eine andere geeignete IDE wie **IntelliJ/WebStorm**
4. **Angular Language Service für VS Code:** [Angular Language Service (`Angular.ng-template`)](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
    - Installiere die Extension über den *Extensions Browser* direkt im Editor.

## 2.) Proxy?

Falls in deinem Unternehmensnetz der Internetzugang durch einen Proxy erfolgt, sind ggf. gesonderte Einstellungen nötig.
Wir haben dir hierfür folgende Anleitung erstellt:
https://workshop.angular.schule/proxy  
Sollte es Probleme mit dem Proxy geben, melde dich bitte bei uns, dann finden wir eine Lösung.


## 3.) Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst du die CLI auf dem System installieren:

```bash
npm install --location=global @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind:

```bash
node -v
# Erwartet:
# 22.22.x oder höher, 24.15.x oder höher, oder 26.0.x oder höher,
# aber nicht 23.x oder 25.x!

ng version
# Erwartet:
# Angular CLI : 22.x.x (!)
# Angular     : 22.x.x (!)
```

Falls du bereits eine ältere Version der Angular CLI auf deinem System installiert hast, führe die Installation bitte trotzdem durch.
Global sollte stets die neueste Version installiert sein.


## 4.) Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Führe in deinem Arbeitsverzeichnis den folgenden Befehl aus, um das Projekt zu erstellen:

> ⚠️ Bitte erstelle das Projekt nicht auf einem Netzlaufwerk, sondern direkt auf der lokalen Festplatte!

```bash
ng new book-rating --style=scss --no-ssr
```

Du kannst während der Installation die Angular-Unterstützung für KI-Tools aktivieren, falls du einen der aufgelisteten Dienste verwendest.
Falls nicht, wähle bei der Frage "*Which AI tools do you want to configure with Angular best practices?*" bitte die Option `None`.

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages (npm)` mit Geduld ab!

Anschließend kannst du in den Ordner wechseln und die Anwendung mit dem Entwicklungswebserver starten:

```bash
cd book-rating
ng serve
```

> Im Browser sollte unter http://localhost:4200 nun eine Website mit dem Text *"Hello, book-rating"* erscheinen!

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_ng17.png)

Beende danach den laufenden Webserver mit `Strg` + `C`.


## 5.) Test-Umgebung prüfen

Prüfe bitte, ob der folgende Befehl ohne Fehlermeldungen ausführt:

```bash
ng test
```

Anschließend kannst du den Prozess wieder mit `q` oder `Strg` + `C` beenden.


## 6.) Styles installieren

Bitte führe diesen Befehl **im Projektverzeichnis `book-rating`** aus, um unser Paket mit CSS-Styles zu installieren.
Die Warnungen bei der Installation kannst du ignorieren.

```bash
npm i @angular-schule/workshop-styles
```


Öffne dann bitte die Datei `src/styles.scss` im Projektordner `book-rating` und füge die folgende Zeile ein:

```css
@use '@angular-schule/workshop-styles';
```

Damit werden die installierten Styles global in das Projekt eingebunden und sind aktiv.
Wir werden die Stylesheets im Workshop gemeinsam nutzen.


## 7.) Beispielseite bereinigen

In der neuen Anwendung wurde bereits eine Beispielseite vorbereitet. Wir wollen in der Schulung natürlich unsere eigene Anwendung entwickeln!

Öffne die Datei `src/app/app.html` im Projektordner `book-rating`. Lösche den gesamten Inhalt dieser Datei.

Anschließend füge in `app.html` bitte das folgende HTML ein. Es wird ein Layout-Container erzeugt und darin eine Überschrift angezeigt:

```html
<main class="container">
  <h1>Book Rating</h1>
</main>
```

Wenn du die Anwendung mit `ng serve` startest und im Browser öffnest (siehe Schritt 4), kannst Du das Ergebnis sehen.


## 8.) Projekt erforschen

Nimm dir nun ein paar Minuten Zeit, um die Struktur des generierten Projekts zu untersuchen.
So hast du die wichtigsten Dateien schon einmal gesehen, bevor wir den Aufbau in der Schulung ausführlich besprechen!

> [!TIP]  
> Zur Vorbereitung empfehlen wir einen Blick in unseren ausführlichen **Artikel zu TypeScript und modernem JavaScript**:
> **https://angular-buch.com/material/typescript**


## Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule) oder bringe deine Fragen zum Technikcheck mit.

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 18.08.2026
