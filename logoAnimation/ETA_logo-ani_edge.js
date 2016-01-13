/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'underline2',
                display: 'none',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"underline2.png",'0px','0px']
            },
            {
                id: 'u2',
                type: 'image',
                rect: ['0', '0px','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"u2.png",'0px','0px']
            },
            {
                id: 'tip2',
                type: 'image',
                rect: ['27px', '105px','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tip2.png",'0px','0px'],
                transform: [[],['-24']]
            },
            {
                id: 's2',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s2.png",'0px','0px']
            },
            {
                id: 'logo2',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"logo2.png",'0px','0px']
            },
            {
                id: 'knife2',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"knife2.png",'0px','0px']
            },
            {
                id: 'e2',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"e2.png",'0px','0px']
            },
            {
                id: 's-top',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'Pieces/s-top.png','0px','0px']
            },
            {
                id: 's-top2',
                type: 'image',
                rect: ['0', '0','720px','260px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"s-top2.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_knife2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_underline2}": [
                ["style", "display", 'none'],
                ["style", "left", '-160px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,0.00)'],
                ["style", "width", '720px'],
                ["style", "height", '260px'],
                ["style", "overflow", 'hidden']
            ],
            "${_u2}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_tip2}": [
                ["style", "top", '105px'],
                ["style", "left", '27px'],
                ["transform", "rotateZ", '-24deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2578,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_knife2}", "top", '0px', { fromValue: '0px'}], position: 2129, duration: 0, easing: "easeOutQuad" },
                { id: "eid2", tween: [ "style", "${_underline2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_underline2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid27", tween: [ "transform", "${_tip2}", "rotateZ", '-24deg', { fromValue: '-24deg'}], position: 2250, duration: 0, easing: "easeOutQuad" },
                { id: "eid13", tween: [ "style", "${_knife2}", "left", '5px', { fromValue: '0px'}], position: 2129, duration: 185, easing: "easeInQuad" },
                { id: "eid14", tween: [ "style", "${_knife2}", "left", '-2px', { fromValue: '5px'}], position: 2314, duration: 189, easing: "easeOutQuad" },
                { id: "eid15", tween: [ "style", "${_knife2}", "left", '0px', { fromValue: '-2px'}], position: 2503, duration: 75, easing: "easeInQuad" },
                { id: "eid26", tween: [ "style", "${_tip2}", "top", '116px', { fromValue: '105px'}], position: 2250, duration: 121, easing: "easeOutQuad" },
                { id: "eid10", tween: [ "style", "${_underline2}", "left", '0px', { fromValue: '-160px'}], position: 2000, duration: 250, easing: "easeOutQuad" },
                { id: "eid23", tween: [ "style", "${_tip2}", "left", '37px', { fromValue: '27px'}], position: 2250, duration: 121, easing: "easeOutQuad" }            ]
        }
    }
},
"mask": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '151px', '29px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,0.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '29px'],
                ["style", "overflow", 'hidden'],
                ["style", "width", '151px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-14868273");
