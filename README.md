# kepler-fill-and-submit-CRN
Kepler automation script to try CRN values in given time intervals.

Login to Kepler with your student ID and password:
https://kepler-beta.itu.edu.tr/ogrenci/DersKayitIslemleri/DersKayit

<img width="1194" alt="Screenshot 2023-02-08 at 19 15 15" src="https://user-images.githubusercontent.com/10723547/217588192-bba15ad7-cf2d-4187-bc19-37055d87e022.png">

Open your browser's console: (Right click and "Inspect")
<img width="1193" alt="Screenshot 2023-02-08 at 19 17 11" src="https://user-images.githubusercontent.com/10723547/217588244-d6e46b76-8cb7-4806-9b62-411cb381e34e.png">

Edit `keplerCRNBot.js` to change default CRN's to your CRN's:
`crn = ["11111, 11112, 11113];`

Copy&paste `keplerCRNBot.js` to your browser console and press "enter" (run).

! There is a request limit for sumbitting CRN's. Use at your own risk.

Change your run time interval:
`setTimeout(keplerFillCrnAndSubmit, 60000);`

