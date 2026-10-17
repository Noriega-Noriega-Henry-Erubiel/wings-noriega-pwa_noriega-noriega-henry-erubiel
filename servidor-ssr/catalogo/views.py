from django.shortcuts import render

# "Base de datos" falsa: una lista de diccionarios en memoria con los 15
# productos de Wings Noriega (los mismos de catalogo.json de la PWA).
# En un proyecto real esto vendría de un modelo (models.py) y una tabla,
# pero para ENTENDER qué es SSR no necesitamos base de datos: lo importante
# es que estos datos se insertan en el HTML *antes* de enviarlo al navegador.
PRODUCTOS = [
    {"nombre": "BBQ", "categoria": "Alitas (10 pzs)", "precio": 150, "stock": 20},
    {"nombre": "Búfalo", "categoria": "Alitas (10 pzs)", "precio": 150, "stock": 20},
    {"nombre": "Mango habanero", "categoria": "Alitas (10 pzs)", "precio": 160, "stock": 20},
    {"nombre": "Lemon pepper", "categoria": "Alitas (10 pzs)", "precio": 155, "stock": 20},
    {"nombre": "Parmesano con ajo", "categoria": "Alitas (10 pzs)", "precio": 160, "stock": 20},
    {"nombre": "Boneless (250 g)", "categoria": "Boneless y más", "precio": 140, "stock": 20},
    {"nombre": "Tenders de pollo", "categoria": "Boneless y más", "precio": 130, "stock": 20},
    {"nombre": "Papas sazonadas", "categoria": "Boneless y más", "precio": 60, "stock": 20},
    {"nombre": "Dedos de queso", "categoria": "Boneless y más", "precio": 85, "stock": 20},
    {"nombre": "Combo para 2", "categoria": "Boneless y más", "precio": 320, "stock": 20},
    {"nombre": "Aderezo ranch o blue cheese", "categoria": "Bebidas y extras", "precio": 20, "stock": 20},
    {"nombre": "Apio y zanahoria", "categoria": "Bebidas y extras", "precio": 25, "stock": 20},
    {"nombre": "Limonada", "categoria": "Bebidas y extras", "precio": 40, "stock": 20},
    {"nombre": "Refresco", "categoria": "Bebidas y extras", "precio": 35, "stock": 20},
    {"nombre": "Té helado", "categoria": "Bebidas y extras", "precio": 35, "stock": 20},
]


def vista_ssr(request):
    """
    Vista con Renderizado en Servidor (SSR).

    request: el objeto que representa la petición que hizo el navegador.

    render() hace tres cosas:
      1) toma la plantilla 'catalogo/catalogo_ssr.html'
      2) le inyecta el diccionario de "contexto" (aquí: la lista de productos)
      3) devuelve el HTML final, YA CON LOS DATOS DENTRO, listo para el navegador.

    Por eso es "servidor": el HTML que llega al navegador ya trae escritos
    los nombres y precios. Si haces clic derecho > "Ver código fuente de la
    página" verás los productos en el HTML, aunque JavaScript esté desactivado.
    Compáralo con la PWA (csr.js), donde el HTML llega vacío y es
    JavaScript quien dibuja los productos DESPUÉS, ya en el navegador.
    """
    contexto = {"productos": PRODUCTOS}
    return render(request, 'catalogo/catalogo_ssr.html', contexto)
