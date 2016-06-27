/* jshint esversion: 6 */

names = [
    ["cd5c5c", "IndianRed"],
    ["f08080", "LightCoral"],
    ["fa8072", "Salmon"],
    ["e9967a", "DarkSalmon"],
    ["ffa07a", "LightSalmon"],
    ["dc143c", "Crimson"],
    ["ff0000", "Red"],
    ["b22222", "Firebrick"],
    ["8b0000", "DarkRed"]
];

var lazy = {
    init: function() {
        let index;
        index = Math.floor(names.length * Math.random());
        console.log(names[index]);
    },
};

lazy.init();
