<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->string('code', 64);
            $table->string('unicode_decimal', 64);
            $table->string('unicode_hex', 64);
            $table->char('status', 1)->default(1);
        });
        DB::table('currencies')->insert([
            ["name" => "US Dollar","code"=>"USD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "ADB Unit of Account","code"=>"XUA","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Afghani","code"=>"AFN","unicode_decimal"=>"1547","unicode_hex"=>"60b"],
            ["name" => "Albania Lek","code"=>"ALL","unicode_decimal"=>"76, 101, 107","unicode_hex"=>"4c, 65, 6b"],
            ["name" => "Algerian Dinar","code"=>"DZD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Argentine Peso","code"=>"ARS","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Armenian Dram","code"=>"AMD","unicode_decimal"=>"1423","unicode_hex"=>"58f"],
            ["name" => "Aruban Florin","code"=>"AWG","unicode_decimal"=>"402","unicode_hex"=>"192"],
            ["name" => "Australian Dollar","code"=>"AUD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Azerbaijan New Manat","code"=>"AZN","unicode_decimal"=>"1084, 1072, 1085","unicode_hex"=>"43c, 430, 43d"],
            ["name" => "Bahamian Dollar","code"=>"BSD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Bahraini Dinar","code"=>"BHD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Bangladeshi Taka","code"=>"BDT","unicode_decimal"=>"2547","unicode_hex"=>"9f3"],
            ["name" => "Barbados Dollar","code"=>"BBD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Belarusian Ruble","code"=>"BYR","unicode_decimal"=>"112, 46","unicode_hex"=>"70, 2e"],
            ["name" => "Belize Dollar","code"=>"BZD","unicode_decimal"=>"66, 90, 36","unicode_hex"=>"42, 5a, 24"],
            ["name" => "Bermudian Dollar","code"=>"BMD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Bhutanese Ngultrum","code"=>"BTN","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Boliviano","code"=>"BOB","unicode_decimal"=>"36, 98","unicode_hex"=>"24, 62"],
            ["name" => "Brazilian Real","code"=>"BRL","unicode_decimal"=>"82, 36","unicode_hex"=>"52, 24"],
            ["name" => "Brunei Dollar","code"=>"BND","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Bulgarian Lev","code"=>"BGN","unicode_decimal"=>"1083, 1074","unicode_hex"=>"43b, 432"],
            ["name" => "Burundi Franc","code"=>"BIF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "Cabo Verde Escudo","code"=>"CVE","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Canadian Dollar","code"=>"CAD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Cayman Islands Dollar","code"=>"KYD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "CFA Franc BCEAO","code"=>"XAF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "CFA Franc BEAC","code"=>"XAF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "CFP Franc","code"=>"XPF","unicode_decimal"=>"70","unicode_hex"=>"46"],
            ["name" => "Chilean Peso","code"=>"CLP","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Colombian Peso","code"=>"COP","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Cambodian Riel","code"=>"KHR","unicode_decimal"=>"6107","unicode_hex"=>"17db"],
            ["name" => "Comorian Franc","code"=>"KMF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "Congolese Franc","code"=>"CDF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "Convertible Marka","code"=>"BAM","unicode_decimal"=>"75, 77","unicode_hex"=>"4b, 4d"],
            ["name" => "Costa Rican Colon","code"=>"CRC","unicode_decimal"=>"8353","unicode_hex"=>"20a1"],
            ["name" => "Croatian Kuna","code"=>"HRK","unicode_decimal"=>"107, 110","unicode_hex"=>"6b, 6e"],
            ["name" => "Cuban Peso","code"=>"CUP","unicode_decimal"=>"8369","unicode_hex"=>"20b1"],
            ["name" => "Czech Koruna","code"=>"CZK","unicode_decimal"=>"75, 269","unicode_hex"=>"4b, 10d"],
            ["name" => "Danish Krone","code"=>"DKK","unicode_decimal"=>"107, 114","unicode_hex"=>"6b, 72"],
            ["name" => "Macedonian Denar","code"=>"MKD","unicode_decimal"=>"1076, 1077, 1085","unicode_hex"=>"434, 435, 43d"],
            ["name" => "Djibouti Franc","code"=>"DJF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "Dobra","code"=>"STD","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Dominican Peso","code"=>"DOP","unicode_decimal"=>"82, 68, 36","unicode_hex"=>"52, 44, 24"],
            ["name" => "East Caribbean Dollar","code"=>"XCD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Egyptian Pound","code"=>"EGP","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "El Salvador Colon","code"=>"SVC","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Ethiopian Birr","code"=>"ETB","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Euro","code"=>"EUR","unicode_decimal"=>"8364","unicode_hex"=>"20ac"],
            ["name" => "Falkland Islands Pound","code"=>"FKP","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "Fiji Dollar","code"=>"FJD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Gambian Dalasi","code"=>"GMD","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Ghana Cedi","code"=>"GHC","unicode_decimal"=>"162","unicode_hex"=>"a2"],
            ["name" => "Gibraltar Pound","code"=>"GIP","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "Guatemalan Quetzal","code"=>"GTQ","unicode_decimal"=>"81","unicode_hex"=>"51"],
            ["name" => "Guinean Franc","code"=>"GNF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "Georgian Lari","code"=>"GEL","unicode_decimal"=>"8382","unicode_hex"=>"20be"],
            ["name" => "Guyana Dollar","code"=>"GYD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Haitian Gourde","code"=>"HTG","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Hong Kong Dollar","code"=>"HKD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Hungary Forint","code"=>"HUF","unicode_decimal"=>"70, 116","unicode_hex"=>"46, 74"],
            ["name" => "Honduras Lempira","code"=>"HNL","unicode_decimal"=>"76","unicode_hex"=>"4c"],
            ["name" => "Iceland Krona","code"=>"ISK","unicode_decimal"=>"107, 114","unicode_hex"=>"6b, 72"],
            ["name" => "Indian Rupee","code"=>"INR","unicode_decimal"=>"8377","unicode_hex"=>"20b9"],
            ["name" => "Indonesia Rupiah","code"=>"IDR","unicode_decimal"=>"82, 112","unicode_hex"=>"52, 70"],
            ["name" => "Iranian Rial","code"=>"IRR","unicode_decimal"=>"65020","unicode_hex"=>"fdfc"],
            ["name" => "Iraqi Dinar","code"=>"IQD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Israeli Sheqel","code"=>"ILS","unicode_decimal"=>"8362","unicode_hex"=>"20aa"],
            ["name" => "Jamaican Dollar","code"=>"JMD","unicode_decimal"=>"74, 36","unicode_hex"=>"4a, 24"],
            ["name" => "Japan Yen","code"=>"JPY","unicode_decimal"=>"165","unicode_hex"=>"a5"],
            ["name" => "Jordanian Dinar","code"=>"JOD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Kazakhstan Tenge","code"=>"KZT","unicode_decimal"=>"1083, 1074","unicode_hex"=>"43b, 432"],
            ["name" => "Kenyan Shilling","code"=>"KES","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Kuwaiti Dinar","code"=>"KWD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Kwanza","code"=>"AOA","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Kyat","code"=>"MMK","unicode_decimal"=>"75","unicode_hex"=>"4b"],
            ["name" => "Kyrgyzstan Som","code"=>"KGS","unicode_decimal"=>"1083, 1074","unicode_hex"=>"43b, 432"],
            ["name" => "Lao Kip","code"=>"LAK","unicode_decimal"=>"8365","unicode_hex"=>"20ad"],
            ["name" => "Lebanese Pound","code"=>"LBP","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "Leone","code"=>"SLL","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Liberian Dollar","code"=>"LRD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Libyan Dinar","code"=>"LD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Lesotho Loti","code"=>"LSL","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Maldivian Rufiyaa","code"=>"MVR","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Malagasy Ariary","code"=>"MGA","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Malawi Kwacha","code"=>"MWK","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Malaysian Ringgit","code"=>"MYR","unicode_decimal"=>"82, 77","unicode_hex"=>"52, 4d"],
            ["name" => "Mauritius Rupee","code"=>"MUR","unicode_decimal"=>"8360","unicode_hex"=>"20a8"],
            ["name" => "Mexican Peso","code"=>"MXN","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Mexican Unidad de Inversion (UDI)","code"=>"MXV","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Moldovan Leu","code"=>"MDL","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Mongolia Tugrik","code"=>"MNT","unicode_decimal"=>"8366","unicode_hex"=>"20ae"],
            ["name" => "Moroccan Dirham","code"=>"MAD","unicode_decimal"=>"46, 1583, 46, 1605","unicode_hex"=>"2e, 62f, 2e, 645"],
            ["name" => "Mozambique Metical","code"=>"MZN","unicode_decimal"=>"77, 84","unicode_hex"=>"4d, 54"],
            ["name" => "Mauritanian ouguiya","code"=>"MRO","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Nigeria Naira","code"=>"NGN","unicode_decimal"=>"8358","unicode_hex"=>"20a6"],
            ["name" => "Nakfa","code"=>"ERN","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Namibia Dollar","code"=>"NAD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Nepalese Rupee","code"=>"NPR","unicode_decimal"=>"8360","unicode_hex"=>"20a8"],
            ["name" => "Netherlands Antillean Guilder","code"=>"ANG","unicode_decimal"=>"402","unicode_hex"=>"192"],
            ["name" => "New Zealand Dollar","code"=>"NZD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "North Korean Won","code"=>"KPW","unicode_decimal"=>"8361","unicode_hex"=>"20a9"],
            ["name" => "Norwegian Krone","code"=>"NOK","unicode_decimal"=>"107, 114","unicode_hex"=>"6b, 72"],
            ["name" => "Pa'anga","code"=>"TOP","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Papua New Guinea Kina","code"=>"PGK","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Pakistan Rupee","code"=>"PKR","unicode_decimal"=>"8360","unicode_hex"=>"20a8"],
            ["name" => "Panamanian Balboa","code"=>"PAB","unicode_decimal"=>"66, 47, 46","unicode_hex"=>"42, 2f, 2e"],
            ["name" => "Paraguayan Guarani","code"=>"PYG","unicode_decimal"=>"8370","unicode_hex"=>"20b2"],
            ["name" => "Pataca","code"=>"MOP","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Peru Nuevo Sol","code"=>"PEN","unicode_decimal"=>"83, 47, 46","unicode_hex"=>"53, 2f, 2e"],
            ["name" => "Peso Uruguayo","code"=>"UYU","unicode_decimal"=>"36, 85","unicode_hex"=>"24, 55"],
            ["name" => "Philippine Peso","code"=>"PHP","unicode_decimal"=>"8369","unicode_hex"=>"20b1"],
            ["name" => "Poland Zloty","code"=>"PLN","unicode_decimal"=>"122, 322","unicode_hex"=>"7a, 142"],
            ["name" => "Pula","code"=>"BWP","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Qatari Rial","code"=>"QAR","unicode_decimal"=>"65020","unicode_hex"=>"fdfc"],
            ["name" => "Rial Omani","code"=>"OMR","unicode_decimal"=>"65020","unicode_hex"=>"fdfc"],
            ["name" => "Romanian Leu","code"=>"RON","unicode_decimal"=>"108, 101, 105","unicode_hex"=>"6c, 65, 69"],
            ["name" => "Russian Ruble","code"=>"RUB","unicode_decimal"=>"1088, 1091, 1073","unicode_hex"=>"440, 443, 431"],
            ["name" => "Rwandan Franc","code"=>"RWF","unicode_decimal"=>"70, 67, 70, 65","unicode_hex"=>"46, 43, 46, 41"],
            ["name" => "Saint Helena Pound","code"=>"SHP","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "Saudi Riyal","code"=>"SAR","unicode_decimal"=>"65020","unicode_hex"=>"fdfc"],
            ["name" => "Serbian Dinar","code"=>"RSD","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Seychelles Rupee","code"=>"SCR","unicode_decimal"=>"8360","unicode_hex"=>"20a8"],
            ["name" => "Singapore Dollar","code"=>"SGD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Solomon Islands Dollar","code"=>"SBD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Somali Shilling","code"=>"SOS","unicode_decimal"=>"83","unicode_hex"=>"53"],
            ["name" => "South African Rand","code"=>"ZAR","unicode_decimal"=>"82","unicode_hex"=>"52"],
            ["name" => "South Sudanese Pound","code"=>"SDG","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "South Korean Won","code"=>"KRW","unicode_decimal"=>"8361","unicode_hex"=>"20a9"],
            ["name" => "Sri Lankan Rupee","code"=>"LKR","unicode_decimal"=>"8360","unicode_hex"=>"20a8"],
            ["name" => "Sudanese Pound","code"=>"SDG","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "Surinam Dollar","code"=>"SRD","unicode_decimal"=>"36","unicode_hex"=>"24"],
            ["name" => "Swazi Lilangeni","code"=>"SZL","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Swedish Krona","code"=>"SEK","unicode_decimal"=>"107, 114","unicode_hex"=>"6b, 72"],
            ["name" => "Swiss Franc","code"=>"CHF","unicode_decimal"=>"67, 72, 70","unicode_hex"=>"43, 48, 46"],
            ["name" => "Syrian Pound","code"=>"SYP","unicode_decimal"=>"163","unicode_hex"=>"a3"],
            ["name" => "Taiwan New Dollar","code"=>"TWD","unicode_decimal"=>"78, 84, 36","unicode_hex"=>"4e, 54, 24"],
            ["name" => "Tajikistani Somoni","code"=>"TJS","unicode_decimal"=>"1083, 1074","unicode_hex"=>"43b, 432"],
            ["name" => "Tala","code"=>"WST","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Tanzanian Shilling","code"=>"TZS","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Thai Baht","code"=>"THB","unicode_decimal"=>"3647","unicode_hex"=>"e3f"],
            ["name" => "Trinidad and Tobago Dollar","code"=>"TTD","unicode_decimal"=>"84, 84, 36","unicode_hex"=>"54, 54, 24"],
            ["name" => "Tunisian Dinar","code"=>"TND","unicode_decimal"=>"1044, 1080, 1085, 46","unicode_hex"=>"414, 438, 43d, 2e"],
            ["name" => "Turkish Lira","code"=>"TRL","unicode_decimal"=>"8356","unicode_hex"=>"20a4"],
            ["name" => "Turkmenistan New Manat","code"=>"TMT","unicode_decimal"=>"1084, 1072, 1085","unicode_hex"=>"43c, 430, 43d"],
            ["name" => "UAE Dirham","code"=>"AED","unicode_decimal"=>"1583, 46, 1573","unicode_hex"=>"62f, 2e, 625"],
            ["name" => "Uganda Shilling","code"=>"UGX","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Ukraine Hryvnia","code"=>"UAH","unicode_decimal"=>"8372","unicode_hex"=>"20b4"],
            ["name" => "Uruguay Peso en Unidades Indexadas (UI)" ,"code"=>"UYU","unicode_decimal"=>"36, 85","unicode_hex"=>"24, 55"],
            ["name" => "Uzbekistan Som","code"=>"UZS","unicode_decimal"=>"1083, 1074","unicode_hex"=>"43b, 432"],
            ["name" => "Venezuelan Bolívar","code"=>"VEF","unicode_decimal"=>"66, 115","unicode_hex"=>"42, 73"],
            ["name" => "Vietnamese Dong","code"=>"VND","unicode_decimal"=>"8363","unicode_hex"=>"20ab"],
            ["name" => "Vanuatu vatu","code"=>"VUV","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Yemeni Rial","code"=>"YER","unicode_decimal"=>"65020","unicode_hex"=>"fdfc"],
            ["name" => "Chinese Renminbi","code"=>"CNY","unicode_decimal"=>"165","unicode_hex"=>"a5"],
            ["name" => "Zambian Kwacha","code"=>"ZMK","unicode_decimal"=>"","unicode_hex"=>""],
            ["name" => "Zimbabwe Dollar","code"=>"ZWD","unicode_decimal"=>"90, 36","unicode_hex"=>"5a, 24"]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('currencies');
    }
}
