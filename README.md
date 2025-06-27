# eltons-europeiske-topper
Reiseblogg over topper i Europa

For å konvertere .HEIC til .jpg i en mappe
```bash
magick mogrify -monitor -format jpg *.HEIC
```

For å slette alle filer av type .HEIC i en mappe
```bash
find . -name "*.HEIC" -type f -delete
```