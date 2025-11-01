# eltons-europeiske-topper
Reiseblogg over topper i Europa

For å konvertere .HEIC til .jpg i en mappe
```bash
magick mogrify -monitor -format jpg *.HEIC
```

Rezise alle bilder i en mappe til 50%
```bash
mogrify -resize 50% *.jpg
```

Rezise alle bilder i sub-mapper til 50%
```bash
for d in */; do ( cd "$d" && mogrify -resize 50% *.jpg ) ; done 
```

For å slette alle filer av type .HEIC i en mappe
```bash
find . -name "*.HEIC" -type f -delete
```