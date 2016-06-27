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
    ["","Orange"],
];

var lazy = {
    init: function() {
        let index;
        index = Math.floor(names.length * Math.random());
        return names[index];
    },
};

lazy.init();
