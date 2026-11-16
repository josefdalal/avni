# רדיוס | המגזין הדיגיטלי של אבני ראשה

עמוד הבית של גליון מס׳ 1, לפי MAG_V13, כדף HTML עם הנפשות כניסה, גילוי ועלייה.

## הרצה

פותחים את התיקייה ב VS Code ומריצים את `index.html` עם Live Server (או כל שרת סטטי). אין build ואין תלויות.

## מבנה

```
index.html
assets/css/style.css   כל העיצוב. 1rem = 10px בלוח של 1920
assets/js/main.js      הנפשות בגלילה, פרלקסה, תפריט
assets/img/            תמונות מעובדות מה PDF (דמויות חתוכות ב webp עם שקיפות)
```

## טיפוגרפיה

Noto Sans Hebrew בלבד, מ Google Fonts:

| שימוש | משקל | רוחב |
|---|---|---|
| כותרות, תקצירים מודגשים | 700 | 75% (Condensed) |
| תקצירים רגילים | 400 | 75% (Condensed) |
| תוויות, שמות כותבים, תיאורים | 100 (Thin) | 100% |

ב Elementor בקרת הטיפוגרפיה לא חושפת את ציר הרוחב. צריך `font-stretch: 75%` ב Custom CSS, או להעלות את Noto Sans Hebrew Condensed כפונט מותאם.

## הנפשות והמקבילה שלהן ב Elementor

| בדף | ב Elementor |
|---|---|
| `.a-up` עלייה קצרה עם הופעה | Entrance Animation: Fade In Up |
| `.a-rise` עלייה ארוכה לדמויות | Fade In Up, משך Slow |
| `.a-zoom` גילוי בהגדלה | Zoom In |
| `.a-left` / `.a-right` כניסת הקווים בפתיח | Fade In Left / Fade In Right |
| `--d` השהיה מדורגת | Animation Delay |
| `data-speed` תנועת פרלקסה | Motion Effects > Scrolling Effects > Vertical Scroll |
| אדוות הפתיח נפתחות מהמרכז | Zoom In לכל עיגול עם השהיה מדורגת |
