/* jshint esversion: 6 */

$(document).ready(function() {

    // when the browser loads the site for the first time
    $('.scss').hide();
    $('.variable').hide();

    init();

    function init() {
        res = lazy.run();
        color = "#" + res[0].toUpperCase();
        name = res[1].toUpperCase();
        _var = "$" + name.toLowerCase() + ": " + color + ";";
        $('body').css({
            'background-color': color,
            'color': lazy.getColorContrast(color)
        });
        $('.scss').show();
        $('#color').html(color);
        $('#name').html(name);
        $('.variable').show();
        $('#var').html(_var);
    }

    new Clipboard('.button');

    $('body').click(function() {
        init();
    });

});

names = [
    // RED
    ["cd5c5c", "IndianRed"],
    ["f08080", "LightCoral"],
    ["fa8072", "Salmon"],
    ["e9967a", "DarkSalmon"],
    ["ffa07a", "LightSalmon"],
    ["dc143c", "Crimson"],
    ["ff0000", "Red"],
    ["b22222", "Firebrick"],
    ["8b0000", "DarkRed"],
    // PINK
    ["ffc0cb", "Pink"],
    ["ffb6c1", "LightPink"],
    ["ff69b4", "HotPink"],
    ["ff1493", "DeepPink"],
    ["c71585", "MediumVioletRed"],
    ["db7093", "PaleVioletRed"],
    // ORANGE
    ["ff7f50", "Coral"],
    ["ff6347", "Tomato"],
    ["ff4500", "OrangeRed"],
    ["ff8c00", "DarkOrange"],
    ["ffa500", "Orange"],
    // YELLOW
    ["ffd700", "Gold"],
    ["ffff00", "Yellow"],
    ["ffffe0", "LightYellow"],
    ["ffacd", "LemonChiffon"],
    ["fafad2", "LightGoldenRodYellow"],
    ["ffefd5", "PapayaWhip"],
    ["ffe4b5", "Moccasin"],
    ["ffdab9", "PeachPuff"],
    ["eee8aa", "PaleGoldenRod"],
    ["f0e68c", "Khaki"],
    ["bdb76b", "DarkKhaki"],
    // PURPLE
    ["e6e6fa", "Lavender"],
    ["d8bfd8", "Thistle"],
    ["dda0dd", "Plum"],
    ["ee82ee", "Violet"],
    ["da70d6", "Orchid"],
    ["ff00ff", "Fuchsia"],
    ["ff00ff", "Magenta"],
    ["ba55d3", "MediumOrchid"],
    ["9370db", "MediumPurple"],
    ["663399", "RebeccaPurple"],
    ["8a2be2", "BlueViolet"],
    ["9400d3", "DarkViolet"],
    ["9932cc", "DarkOrchid"],
    ["8b008b", "DarkMagenta"],
    ["800080", "Purple"],
    ["4b0082", "Indigo"],
    ["6a5acd", "SlateBlue"],
    ["483d8b", "DarkSlateBlue"],
    ["7b68ee", "MediumSlateBlue"],
    // GREEN
    ["adff2f", "GreenYellow"],
    ["7fff00", "ChartRuese"],
    ["7cfc00", "LawnGreen"],
    ["00FF00", "Lime"],
    ["32cd32", "LimeGreen"],
    ["98fb98", "PaleGreen"],
    ["90ee90", "LightGreen"],
    ["00fa9a", "MediumSpringGreen"],
    ["00ff7f", "SpringGreen"],
    ["3cb371", "MediumSeaGreen"],
    ["2e8b57", "SeaGreen"],
    ["228b22", "ForestGreen"],
    ["008000", "Green"],
    ["006400", "DarkGreen"],
    ["9acd32", "YellowGreen"],
    ["6b8e23", "OliveDrab"],
    ["808000", "Olive"],
    ["556b2f", "DarkOliveGreen"],
    ["66cdaa", "MediumAquamarine"],
    ["8fbc8b", "DarkSeaGreen"],
    ["20b2aa", "LightSeaGreen"],
    ["008b8b", "DarkCyan"],
    ["008080", "Teal"],
    // BLUE
    ["00ffff", "Aqua"],
    ["00ffff", "Cyan"],
    ["e0ffff", "LightCyan"],
    ["afeeee", "PaleTurquoise"],
    ["7fffd4", "Aquamarine"],
    ["40e0d0", "Turquoise"],
    ["48d1cc", "MediumTurquoise"],
    ["00ced1", "DarkTurquoise"],
    ["5f93a0", "CadetBlue"],
    ["4682b4", "SteelBlue"],
    ["b0c4de", "LightSteelBlue"],
    ["b0e0e6", "PowderBlue"],
    ["add8e6", "LightBlue"],
    ["87ceeb", "SkyBlue"],
    ["87cefa", "LightSkyBlue"],
    ["00bfff", "DeepSkyBlue"],
    ["1e90ff", "DodgerBlue"],
    ["6495ed", "CornflowerBlue"],
    ["4169e1", "RoyalBlue"],
    ["0000ff", "Blue"],
    ["0000cd", "MediumBlue"],
    ["00008b", "DarkBlue"],
    ["000080", "Navy"],
    ["191970", "MidnightBlue"],
    // BROWN
    ["fff8dc", "CornSilk"],
    ["ffebcd", "BlanchedAlmond"],
    ["ffe4c4", "Bisque"],
    ["ffdead", "Navajowhite"],
    ["f5deb3", "Wheat"],
    ["deb887", "BurlyWood"],
    ["d2b48c", "Tan"],
    ["bc8f8f", "RosyBrown"],
    ["f4a460", "SandyBrown"],
    ["daa520", "Goldenrod"],
    ["b8860b", "DarkGoldenrod"],
    ["cd853f", "Peru"],
    ["d2691e", "Chocolate"],
    ["8b4513", "Saddlebrown"],
    ["a0522d", "Sienna"],
    ["a52a2a", "Brown"],
    ["800000", "Maroon"],
    // WHITE
    ["ffffff", "White"],
    ["fffafa", "Snow"],
    ["f0fff0", "Honeydew"],
    ["f5fffa", "MintCream"],
    ["f0ffff", "Azure"],
    ["f0f8ff", "AliceBlue"],
    ["f8f8ff", "GhostWhite"],
    ["f5f5f5", "Whitesmoke"],
    ["fff5ee", "Seashell"],
    ["f5f5dc", "Beige"],
    ["fdf5e6", "OldLace"],
    ["fffaf0", "FloralWhite"],
    ["fffff0", "Ivory"],
    ["faebd7", "AntiqueWhite"],
    ["faf0e6", "Linen"],
    ["fff0f5", "LavenderBlush"],
    ["ffe4e1", "MistyRose"],
    // GRAY
    ["dcdcdc", "Gainsboro"],
    ["d3d3d3", "LightGray"],
    ["c0c0c0", "Silver"],
    ["a9a9a9", "DarkGray"],
    ["808080", "Gray"],
    ["696969", "DimGray"],
    ["778899", "LightSlateGray"],
    ["708090", "SlateGray"],
    ["2f4f4f", "DarkSlateGray"],
    ["000000", "Black"]
];

var lazy = {
    run: function() {
        return names[Math.floor(names.length * Math.random())];
    },

    getColorContrast: function(hexcolor) {
        hexcolor = hexcolor.replace('#', '');
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? '#353E55' : '#F0F5F9';
    }
};
