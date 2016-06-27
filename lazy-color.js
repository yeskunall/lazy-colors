/* jshint esversion: 6 */

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
    ["db7093", "PaleVioltedRed"],
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
];

var lazy = {
    init: function() {
        let index;
        index = Math.floor(names.length * Math.random());
        return names[index];
    },
};

lazy.init();
