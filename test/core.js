module("Core");

test("Basics", function() {
    expect(5);
    ok( $.defaultLocale,  "$.defaultLocale is set" );
    equals( "en_US", $.defaultLocale, "$.defaultLocale" )
    ok( $.locale,         "$.locale is '" + $.locale +"'" );
    ok( $.lang,           "$.lang is '" + $.lang +"'" );
    ok( $.currency,       "$.currency is '" + $.currency +"'" );
});
