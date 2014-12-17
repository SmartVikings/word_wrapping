Word wrapping
================

Použitie skriptu je veľmi jednoduché. Do hlavičky html pridajte:

```html
<script type="text/javascript" src="jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="jsprepos.js"></script>
<script type="text/javascript">
		    $(function () {
		        $('.wrapping').jsprepos();
		    });
</script>
```

A text, ktorý chceme aby sa správne zalamoval umiestnime do 
```html
<p class="wrapping">Moj zalamovaci text</p>
```