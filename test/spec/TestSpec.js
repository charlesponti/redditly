describe("Test", function() {
	var segments;

	beforeEach(function() {
		segments = [
			{
				name: 'Photography',
				interests: ['nikon', 'slr', 'cannon']
			}, {
				name: 'Auto',
				interests: ['ford', 'volvo', 'ferrari']
			}, {
				name: 'Motor Racing',
				interests: ['mclaren', 'ferrari', 'lotus']
			}
		];
		validateInterests = [
			{
				 name: 'Photography',
				 interests: ['nikon', 'slr']
			 }, {
				name: 'Auto',
				interests: ['ford']
			 }, {
				name: 'Motor Racing',
				 interests: ['mclaren', 'lotus']
		}]
	});

	describe('validateInterest', function () {
		it('should return a boolean', function () {
			expect(typeof validateInterest('lotus')).toBe('boolean');
		});
		it('should return true for a valid interest', function() {
			expect(validateInterest('lotus')).toBe(true);
		});
		it('should return false for an invalid interest', function () {
			expect(validateInterest('foo')).toBe(false);
		});
	});

	describe('validateSegments', function() {
		it('should return a promise');
		it ('should return only valid interests', function() {
			var x = validateSegments(segments, validateInterest);
			expect(x[0].name).toEqual(validateInterests[0].name);
			expect(x[1].name).toEqual(validateInterests[1].name);
			expect(x[2].name).toEqual(validateInterests[2].name);
		})
	});

});
