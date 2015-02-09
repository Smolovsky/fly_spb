YMaps.jQuery(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map( YMaps.jQuery("#YMap")[0] );
    map.setCenter(new YMaps.GeoPoint(30.01599, 60.00894), 9);

    map.addControl(new YMaps.TypeControl());
    map.addControl(new YMaps.ToolBar());
    map.addControl(new YMaps.Zoom());
    map.addControl(new YMaps.ScaleLine());

    var s = new YMaps.Style();
    // Создает стиль значка метки
    s.iconStyle = new YMaps.IconStyle();

    s.iconStyle.href = "/images/map_icon.png";
    s.iconStyle.size = new YMaps.Point(84, 94);
    s.iconStyle.offset = new YMaps.Point(-44, -94);

//                    Создает метку с значком
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(29.860980000000001, 60.167920000000002), {style: s});
    placemark.name =  "поселок Репино, Санкт-Петербург, Россия";
    var placemark2 = new YMaps.Placemark(new YMaps.GeoPoint(29.777470000000001, 59.99288), {style: s});
    placemark2.name = "Кронштадт, Санкт-Петербург, Россия";
    var placemark3 = new YMaps.Placemark(new YMaps.GeoPoint(29.9197,59.6890), {style: s});
    placemark3.name = "поселок Глухово, Санкт-Петербург, Россия";

    map.addOverlay(placemark);
    map.addOverlay(placemark2);
    map.addOverlay(placemark3);
});