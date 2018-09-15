// WebTrends SmartSource Data Collector Tag v10.4.1
// Copyright (c) 2014 Webtrends Inc.  All rights reserved.
// Tag Builder Version: 4.1.3.2
// Created: 2014.03.27
window.webtrendsAsyncInit = function() {
    var dcs = new Webtrends.dcs().init({
        dcsid: "dcs222git3jjuh18kvbl8tldg_1w4j",
        domain: "statse.webtrendslive.com",
        timezone: -5,
        i18n: true,
        fpcdom: ".guardianlife.com",
        //enabled offsite & download link tracking - DO 03/2017
        offsite: true,
        onsitedoms: "www.guardianlife.com",
        download: true,
        downloadtypes: "xls,doc,ppt,pdf,txt,csv,zip,docx,xlsx,pptx,rar,gzip,exe,dat",
        plugins: {
           scroll_depth:{src:"//www.guardianlife.com/sites/all/libraries/webtrends/webtrends.scroll_depth.js"},
            advancedLinkTracking: {
                src: "//www.guardianlife.com/sites/all/libraries/webtrends/advancedLinkTracking.js",
                trackers: [{
                        //Annual Report 2016 tracking events - START 
                        name: "VideoMute",
                        type: "attributes",
                        attributes: {
                            'id': 'video-mute'
                        },
                        params: ["WT.dl", "36", "DCS.dcsuri", "/annualreport/video-mute", "WT.z_engage", "Video Mute"],
                        titlePrefix: "Annual Report: Video Mute",
                        catchRightClicks: true
                    }, {
                        name: "share-hero-fb",
                        type: "classes",
                        classNames: "at-svc-facebook",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/share/facebook", "WT.z_engage", "Share-Facebook"],
                        titlePrefix: "Share-Facebook",
                        catchRightClicks: true
                    }, {
                        name: "share-hero-tw",
                        type: "classes",
                        classNames: "at-svc-twitter",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/share/twitter", "WT.z_engage", "Share-Twitter"],
                        titlePrefix: "Share-Twitter",
                        catchRightClicks: true
                    },

                    {
                        name: "share-hero-li",
                        type: "classes",
                        classNames: "at-svc-linkedin",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/share/linkedin", "WT.z_engage", "Share-Linked In"],
                        titlePrefix: "Share-LinkedIn",
                        catchRightClicks: true
                    }, {
                        name: "share-hero-gp",
                        type: "classes",
                        classNames: "at-svc-google_plusone_share",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/share/googleplus", "WT.z_engage", "Share-GooglePlus"],
                        titlePrefix: "Share-GooglePlus",
                        catchRightClicks: true
                    }, {
                        name: "share-hero-mailto",
                        type: "classes",
                        classNames: "at-icon-wrapper at-svc-mailto",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/share/mailto", "WT.z_engage", "Share-MailTo"],
                        titlePrefix: "Share-MailTo",
                        catchRightClicks: true
                    },{
                        name: "follow-footer-yt",
                        type: "classes",
                        classNames: "youtube",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/follow/youtube", "WT.z_engage", "Follow-Youtube"],
                        titlePrefix: "Follow-Youtbe",
                        catchRightClicks: true
                    }, {
                        name: "follow-footer-fb",
                        type: "classes",
                        classNames: "facebook",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/follow/facebook", "WT.z_engage", "Follow-Facebook"],
                        titlePrefix: "Follow-Facebook",
                        catchRightClicks: true
                    }, {
                        name: "follow-footer-med",
                        type: "classes",
                        classNames: "medium",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/follow/medium", "WT.z_engage", "Follow-Medium"],
                        titlePrefix: "Follow-Medium",
                        catchRightClicks: true
                    }, {
                        name: "follow-footer-tw",
                        type: "classes",
                        classNames: "twitter",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/follow/twitter", "WT.z_engage", "Follow-Twitter"],
                        titlePrefix: "Follow-Twitter",
                        catchRightClicks: true
                    },

                    {
                        name: "follow-footer-li",
                        type: "classes",
                        classNames: "linkedin",
                        params: ["WT.dl", "36", "DCS.dcsuri", "/follow/linkedin", "WT.z_engage", "Follow-Linked In"],
                        titlePrefix: "Follow-LinkedIn",
                        catchRightClicks: true
                    }, {
                        name: "view-importantinfo",
                        type: "urls",
                        URLPatterns: "important-information",
                        params: ["WT.dl", "36", "WT.z_engage", "View Important Information"],
                        titlePrefix: "View:",
                        catchRightClicks: true
                    }, {
                        name: "customer-story-next",
                        type: "ids",
                        idNames: "story-next",
                        params: ["WT.dl", "36", "WT.z_engage", "Customer-Story-Next", "DCS.dcsuri", window.location.pathname,"WT.ti","Customer Story:Next"],
                        catchRightClicks: true
                        }, {
                        name: "financial-accordion",
                        type: "classes",
                        classNames: "item",
                        attribInherit:true,
                        attribCapture:"data-id",
                        params: ["WT.dl", "36", "WT.z_engage", "Financial-Accordion-Click"],
                        catchRightClicks: false
                        }, {
                        name: "disability-insurance-video",
                        type: "urls",
                        URLPatterns: "/workplace-benefits/long-term-disability-video",
                        params: ["WT.dl", "36", "WT.z_engage", "Disablility Insurance Video Link Click"],
                        titlePrefix: "Click:",
                        catchRightClicks: true
                    }, {
                        name: "life-insurance-video",
                        type: "urls",
                        URLPatterns: "/life-insurance/whole-life-insurance-video",
                        params: ["WT.dl", "36", "WT.z_engage", "Life Insurance Video Link Click"],
                        titlePrefix: "Click:",
                        catchRightClicks: true
                    }, {
                        name: "corporate-social-responsibility",
                        type: "urls",
                        URLPatterns: "/about-guardian/corporate-social-responsibility",
                        params: ["WT.dl", "36", "WT.z_engage", "Corporate Social Responsiblity Link Click"],
                        titlePrefix: "Click:",
                        catchRightClicks: true
                    }
                        //Annual Report 2016 tracking events - END
                    
                ]
            }
        }
    });

    Webtrends.addTransform(
    //gets the body class for the customer story pages using Slick
        function(dcsObject, multiTrackObject) {
             var pattern = /.*workforce-development.*|.*customer-story-.*/;
            if (pattern.test(document.location.pathname)) {
                multiTrackObject.argsa.push(
                    "DCSext.WT.z_currentmodal", $('body').attr('class')
                );
            }
        },
        "multitrack", dcs
    );
    dcs.track();
};
(function() {
    var s = document.createElement("script");
    s.async = true;
    s.src = "//www.guardianlife.com/sites/all/libraries/webtrends/webtrends.js";
    var s2 = document.getElementsByTagName("script")[0];
    s2.parentNode.insertBefore(s, s2);
}());