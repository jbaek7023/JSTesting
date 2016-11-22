/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* placing all of our tests within the $() function,
 * since some of these tests may require DOM elements to ensure 
 * they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        var allFeedsLength;

        beforeEach(function(){
            allFeedsLength = allFeeds.length;
        });
            
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('has defined URL and it is not empty', function(){
            for(var i=0; i<allFeedsLength; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
         });

         it('has defined name and it is not empty', function(){
            for(var i=0; i<allFeedsLength; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
         });
    });

describe('The menu', function(){
        var body;
        var menuIcon;

        beforeEach(function(){
            body = $('body');
            menuIcon = $('.menu-icon-link');
        })

        it('is hidden by default', function(){
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

        it('changed visibility', function(){
            //current body class before clicked should be menu-hidden
            expect(body.hasClass('menu-hidden')).toBe(true);

            //current body class after clicked once should be without menu-hidden
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            //current body class after clicked twice should be with menu-hidden
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);

        });
    });
    
    describe("Initial Entries", function(){
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });
        
         it('has one or more entries', function() {
            var feedList = $('.feed');
            var entryLength= feedList.find('.entry').length
            expect(entryLength).not.toBe(0);
         });
    });

    describe("New Feed Selection", function() {
        var currentContent;
        var newContent; 

        beforeEach(function(done) {
            loadFeed(0, function(){
                currentContent = $('.feed .entry').text();    
                
                done();
            });
        });

        it('changes feed', function(done) {
            loadFeed(1, function() {
                newContent= $('.feed').text();

                expect(currentContent).not.toBe(newContent);

                done();
            });
        });
    });
}());
