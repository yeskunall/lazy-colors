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
    ["ff7f50","Coral"],
    ["ff6347","Tomato"],
    ["ff4500","OrangeRed"],
    ["ff8c00","DarkOrange"],
    ["ffa500","Orange"],
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
];

var lazy = {
    init: function() {
        let index;
        index = Math.floor(names.length * Math.random());
        return names[index];
    },
};

lazy.init();
