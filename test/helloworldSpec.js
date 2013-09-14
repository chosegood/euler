define(['helloworld', 'underscore'], function(helloworld, _) {

    describe('just checking', function() {

        it('works for app', function() {
            var hello = helloworld();
            expect(hello).toEqual('Hello World!');
        });

        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1,2,3])).toEqual(3);
        });

    });

});
