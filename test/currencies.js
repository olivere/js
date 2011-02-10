module("Currencies");

test("can format currency for de", function() {
    expect(6);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'de'}), '1.234,56 \u20ac' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'de'}), '-1.234,56 \u20ac' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'de'}), '12.345.678,90 \u20ac' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'de'}), '-12.345.678,90 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'de'}), '1.234,56 $' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'de'}), '-1.234,56 $' );
});

test("can format currency for de_DE", function() {
    expect(7);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'de_DE'}), '1.234,56 \u20ac' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'de_DE'}), '-1.234,56 \u20ac' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'de_DE'}), '12.345.678,90 \u20ac' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'de_DE'}), '-12.345.678,90 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'de-DE'}), '1.234,56 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'de_DE'}), '1.234,56 $' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'de_DE'}), '-1.234,56 $' );
});

test("can format currency for de_AT", function() {
    expect(7);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'de_AT'}), '\u20ac 1.234,56' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'de_AT'}), '-\u20ac 1.234,56' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'de_AT'}), '\u20ac 12.345.678,90' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'de_AT'}), '-\u20ac 12.345.678,90' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'de-AT'}), '\u20ac 1.234,56' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'de_AT'}), '$ 1.234,56' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'de_AT'}), '-$ 1.234,56' );
});

test("can format currency for de_CH", function() {
    expect(10);
    equals( $.formatCurrency(1234.56, {currency: 'CHF', locale: 'de_CH'}), 'Fr. 1\'234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'CHF', locale: 'de_CH'}), 'Fr.-1\'234.56' );
    equals( $.formatCurrency(12345678.90, {currency: 'CHF', locale: 'de_CH'}), 'Fr. 12\'345\'678.90' );
    equals( $.formatCurrency(-12345678.90, {currency: 'CHF', locale: 'de_CH'}), 'Fr.-12\'345\'678.90' );
    equals( $.formatCurrency(1234.56, {currency: 'CHF', locale: 'de_CH'}), 'Fr. 1\'234.56' );
    equals( $.formatCurrency(1234.56, {currency: 'CHF', locale: 'de-CH'}), 'Fr. 1\'234.56' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'de_CH'}), '\u20ac 1\'234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'de_CH'}), '\u20ac-1\'234.56' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'de_CH'}), '$ 1\'234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'de_CH'}), '$-1\'234.56' );
});

test("can format currency for en", function() {
    expect(6);
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'en'}), '$1,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'en'}), '($1,234.56)' );
    equals( $.formatCurrency(12345678.90, {currency: 'USD', locale: 'en'}), '$12,345,678.90' );
    equals( $.formatCurrency(-12345678.90, {currency: 'USD', locale: 'en'}), '($12,345,678.90)' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'en'}), '\u20ac1,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'en'}), '(\u20ac1,234.56)' );
});

test("can format currency for en_US", function() {
    expect(7);
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'en_US'}), '$1,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'en_US'}), '($1,234.56)' );
    equals( $.formatCurrency(12345678.90, {currency: 'USD', locale: 'en_US'}), '$12,345,678.90' );
    equals( $.formatCurrency(-12345678.90, {currency: 'USD', locale: 'en_US'}), '($12,345,678.90)' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'en-US'}), '$1,234.56' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'en_US'}), '\u20ac1,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'en_US'}), '(\u20ac1,234.56)' );
});

test("can format currency for en_GB", function() {
    expect(9);
    equals( $.formatCurrency(1234.56, {currency: 'GBP', locale: 'en_GB'}), '\u00a31,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'GBP', locale: 'en_GB'}), '-\u00a31,234.56' );
    equals( $.formatCurrency(12345678.90, {currency: 'GBP', locale: 'en_GB'}), '\u00a312,345,678.90' );
    equals( $.formatCurrency(-12345678.90, {currency: 'GBP', locale: 'en_GB'}), '-\u00a312,345,678.90' );
    equals( $.formatCurrency(1234.56, {currency: 'GBP', locale: 'en_GB'}), '\u00a31,234.56' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'en-GB'}), '\u20ac1,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'en-GB'}), '-\u20ac1,234.56' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'en_GB'}), '$1,234.56' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'en_GB'}), '-$1,234.56' );
});

test("can format currency for es", function() {
    expect(6);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'es'}), '1.234,56 \u20ac' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'es'}), '-1.234,56 \u20ac' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'es'}), '12.345.678,90 \u20ac' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'es'}), '-12.345.678,90 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'es'}), '1.234,56 $' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'es'}), '-1.234,56 $' );
});

test("can format currency for es_ES", function() {
    expect(7);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'es_ES'}), '1.234,56 \u20ac' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'es_ES'}), '-1.234,56 \u20ac' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'es_ES'}), '12.345.678,90 \u20ac' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'es_ES'}), '-12.345.678,90 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'es-ES'}), '1.234,56 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'es_ES'}), '1.234,56 $' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'es_ES'}), '-1.234,56 $' );
});

test("can format currency for fr", function() {
    expect(6);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'fr'}), '1\u00a0234,56 \u20ac' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'fr'}), '-1\u00a0234,56 \u20ac' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'fr'}), '12\u00a0345\u00a0678,90 \u20ac' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'fr'}), '-12\u00a0345\u00a0678,90 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'fr'}), '1\u00a0234,56 $' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'fr'}), '-1\u00a0234,56 $' );
});

test("can format currency for fr_FR", function() {
    expect(7);
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'fr_FR'}), '1\u00a0234,56 \u20ac' );
    equals( $.formatCurrency(-1234.56, {currency: 'EUR', locale: 'fr_FR'}), '-1\u00a0234,56 \u20ac' );
    equals( $.formatCurrency(12345678.90, {currency: 'EUR', locale: 'fr_FR'}), '12\u00a0345\u00a0678,90 \u20ac' );
    equals( $.formatCurrency(-12345678.90, {currency: 'EUR', locale: 'fr_FR'}), '-12\u00a0345\u00a0678,90 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'EUR', locale: 'fr-FR'}), '1\u00a0234,56 \u20ac' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'fr_FR'}), '1\u00a0234,56 $' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'fr_FR'}), '-1\u00a0234,56 $' );
});

test("can format currency for ja", function() {
    expect(8);
    equals( $.formatCurrency(1234.56, {currency: 'JPY', locale: 'ja'}), '\u00a51,235' );
    equals( $.formatCurrency(-1234.56, {currency: 'JPY', locale: 'ja'}), '-\u00a51,235' );
    equals( $.formatCurrency(12345678.90, {currency: 'JPY', locale: 'ja'}), '\u00a512,345,679' );
    equals( $.formatCurrency(-12345678.90, {currency: 'JPY', locale: 'ja'}), '-\u00a512,345,679' );
    equals( $.formatCurrency(1234.01, {currency: 'JPY', locale: 'ja'}), '\u00a51,234' );
    equals( $.formatCurrency(-1234.01, {currency: 'JPY', locale: 'ja'}), '-\u00a51,234' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'ja'}), '$1,235' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'ja'}), '-$1,235' );
});

test("can format currency for ja_JP", function() {
    expect(9);
    equals( $.formatCurrency(1234.56, {currency: 'JPY', locale: 'ja_JP'}), '\u00a51,235' );
    equals( $.formatCurrency(-1234.56, {currency: 'JPY', locale: 'ja_JP'}), '-\u00a51,235' );
    equals( $.formatCurrency(12345678.90, {currency: 'JPY', locale: 'ja_JP'}), '\u00a512,345,679' );
    equals( $.formatCurrency(-12345678.90, {currency: 'JPY', locale: 'ja_JP'}), '-\u00a512,345,679' );
    equals( $.formatCurrency(1234.56, {currency: 'JPY', locale: 'ja-JP'}), '\u00a51,235' );
    equals( $.formatCurrency(1234.01, {currency: 'JPY', locale: 'ja_JP'}), '\u00a51,234' );
    equals( $.formatCurrency(-1234.01, {currency: 'JPY', locale: 'ja_JP'}), '-\u00a51,234' );
    equals( $.formatCurrency(1234.56, {currency: 'USD', locale: 'ja_JP'}), '$1,235' );
    equals( $.formatCurrency(-1234.56, {currency: 'USD', locale: 'ja_JP'}), '-$1,235' );
});



// Formatting currencies in HTML

test("can generate HTML from single element", function() {
    expect(1);
    var source   = $('<span amount="12345678.90" currency="EUR"></span>');
    var expected = $('<span amount="12345678.90" currency="EUR">12.345.678,90 \u20ac</span>');
    var s = source.formatCurrency({locale: 'de_DE'});
    equals( s.html(), expected.html() );
});

test("can generate HTML from single element (different currency)", function() {
    expect(1);
    var source   = $('<span amount="12345678.90" currency="USD"></span>');
    var expected = $('<span amount="12345678.90" currency="USD">12.345.678,90 $</span>');
    var s = source.formatCurrency({locale: 'de_DE'});
    equals( s.html(), expected.html() );
});

test("can generate HTML from single element (different locale)", function() {
    expect(1);
    var source   = $('<span amount="12345678.90" currency="EUR"></span>');
    var expected = $('<span amount="12345678.90" currency="EUR">\u20ac12,345,678.90</span>');
    var s = source.formatCurrency({locale: 'en_US'});
    equals( s.html(), expected.html() );
});

test("can generate HTML from selector", function() {
    expect(1);
    $(
        '<ul>'+
        '<li><span class="price" amount="12345678.90" currency="EUR"></span></li>'+
        '<li><span class="price" amount="12345678.90" currency="USD"></span></li>'+
        '<li><span class="price" amount="12345678" currency="JPY"></span></li>'+
        '</ul>'
    );
    ok( $('span.price').formatCurrency({locale: 'de_DE'}) );
});

