describe('score-to-grade', function() {
  it('shoule return S', function() {
    var result = scoreToGrade(90);

    expect(result).toBe('S');
  });

  it('shoule return A', function() {
    var result = scoreToGrade(87);

    expect(result).toBe('A');
  });

  it('shoule return B', function() {
    var result = scoreToGrade(76);

    expect(result).toBe('B');
  });

  it('shoule return C', function() {
    var result = scoreToGrade(65);

    expect(result).toBe('C');
  });

  it('shoule return D', function() {
    var result = scoreToGrade(59);

    expect(result).toBe('D');
  });

  it('shoule return "it is not a right score"', function() {
    expect(function() {
      scoreToGrade(100)
    }).toThrowError(TypeError);
  });

  it('shoule return "it is not a right score"', function() {
    expect(function() {
      scoreToGrade(-1)
    }).toThrowError(TypeError);
  });

  it('shoule return "please input number"', function() {
    expect(function() {
      scoreToGrade("asdfad")
    }).toThrowError(TypeError);
  });
});
