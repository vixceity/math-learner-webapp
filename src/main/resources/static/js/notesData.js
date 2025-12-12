const notesData = {
    algebra1: {
        1: `
            <h2>1. Expressions & Equations</h2>
            <ul>
                <li>1.1 Order of Operations (PEMDAS)
Parentheses → Exponents → Multiply/Divide → Add/Subtract.</li>

                <li>1.2 Expressions vs Equations vs Inequalities
Expression: math phrase (3x + 5)
Equation: equals something (3x + 5 = 11)
Inequality: greater/less than (3x + 5 > 11)</li>

                <li>1.3 Functions as Rules & Tables
                Function: one input → one output
Rule: f(x) = 2x + 3
Table shows x → f(x)
                </li>

                
                <li>1.4 Functions as Graphs
                x-axis = input, y-axis = output ---

Plot points from table or rule
                </li>
            </ul>
        `,




        2: `
            <h2>2. Real Numbers</h2>
            <ul>
            <p>2.1 Real Numbers

All numbers: whole, fractions, decimals, negatives.</p>
        
        <p>
        2.2 Add/Subtract

Same sign: add, keep sign

Different signs: subtract, take bigger sign
</p>    
       
   <p>
   2.3 Multiply/Divide

Same sign → positive

Different signs → negative
</p>

<p>
2.4 Combine Like Terms & Distribute

Like terms: add/subtract coefficients (
3x+5x=8x)

Distribute: 
a(b+c)=ab+ac
</p>       


</ul>
            
        `,



        3: `
            <h2>3. Solving Equations</h2>
            <ul>
            
<p>3.1 One-Step Equations

Solve by undoing +, −, ×, ÷ once

Example: 
𝑥
+
5
=
12
→
𝑥
=
7
x+5=12→x=7</p>
<p>3.2 Two-Step Equations

Undo in reverse order of operations

Example: 
2
𝑥
+
3
=
11
→
2
𝑥
=
8
→
𝑥
=
4
2x+3=11→2x=8→x=4</p>
<p>3.3 Multi-Step Equations

Combine like terms, distribute, then solve</p>
<p>3.4 Variables All Over

Move variables to one side first, then solve

Example: 
2
𝑥
+
3
=
𝑥
+
7
→
𝑥
=
4
2x+3=x+7→x=4</p>

</ul>
            
        `,

        4: `
            <h2>4. Solving Proportions</h2>
            <ul>
            
<p>4.1 Ratios and Proportions : A ratio compares two quantities; a proportion is an equation stating two ratios are equal.</p>
<p>4.2 Solving Proportions with Cross Products : Multiply diagonally and solve. Example: 
𝑎
𝑏
=
𝑐
𝑑
→
𝑎
⋅
𝑑
=
𝑏
⋅
𝑐
b
a
\t​

=
d
c
\t​

→a⋅d=b⋅c</p>
<p>4.3 Solving Percent Problems : Convert percent to decimal → multiply → solve. Example: 20% of 50 → 0.2 × 50 = 10</p>
<p>4.4 Solving for Y : Rearrange equations to isolate y. Example: 
2
𝑦
+
3
=
11
→
𝑦
=
4
2y+3=11→y=4</p>

</ul>
            
        `,


        5: `
    <h2>5. Linear Functions</h2>
    <ul>
        <p>5.1 Plot Points in the Coordinate Plane: Use (x, y) to locate points on the coordinate plane.</p>
        <p>5.2 Graph Linear Equations using Intercepts: Find where the line crosses x-axis and y-axis; connect points to graph.</p>
        <p>5.3 Rate of Change (Slope): Slope = rise ÷ run = change in y ÷ change in x.</p>
        <p>5.4 Graph Linear in Slope-Intercept Form: Use y=mx+b; start at y-intercept b, then use slope m to find another point.</p>
        <p>5.5 Graph Linear Functions: Plot multiple points from a table or use slope and intercept; draw a straight line through them.</p>
    </ul>
`,

        6: `
    <h2>6. Writing Linear Equations</h2>
    <ul>
        <p>6.1 Write in Slope-Intercept Form: Use y=mx+b; m = slope, b = y-intercept.</p>
        <p>6.2 Use Equations in Slope-Intercept Form: Plug in x to find y; check points on the line.</p>
        <p>6.3 Equations of Parallel/Perpendicular Lines: Parallel: same slope; Perpendicular: slope = opposite reciprocal.</p>
        <p>6.4 Fit a Line to Data/Linear Models: Plot data points and draw a line that best represents the trend; use equation for predictions.</p>
    </ul>
`,

        7: `
    <h2>7. Solving and Graphing Linear Inequalities</h2>
    <ul>
        <p>7.1 Inequalities: Symbols: <, >, ≤, ≥; solution sets show all possible values.</p>
        <p>7.2 Solve Inequalities: Isolate the variable; flip inequality when multiplying/dividing by a negative.</p>
        <p>7.3 Multi-step Inequalities: Combine like terms, distribute, then solve like one-step/two-step inequalities.</p>
        <p>7.4 Absolute Value Equations: |x|=a → x=a or x=−a.</p>
        <p>7.5 Linear Inequalities in Two Variables: Graph line (solid for ≤, ≥; dashed for <, >), shade solution region.</p>
    </ul>
`,

        8: `
    <h2>8. Systems of Equations and Inequalities</h2>
    <ul>
        <p>8.1 Solving Systems by Graphing: Graph each line; intersection = solution.</p>
        <p>8.2 Solving Systems by Substitution: Solve one equation for a variable, plug into the other.</p>
        <p>8.3 Solving Systems by Elimination: Add/subtract equations to eliminate a variable, then solve.</p>
        <p>8.4 Solving Special Systems: No solution → lines parallel; Infinite solutions → lines coincide.</p>
        <p>8.5 Solving Systems of Inequalities: Graph each inequality; overlapping shaded region = solution.</p>
    </ul>
`,

        9: `
    <h2>9. Exponents</h2>
    <ul>
        <p>9.1 Expand and Condense Exponents: Use multiplication/addition of powers and factoring.</p>
        <p>9.2 Exponent Rules: a^m ⋅ a^n = a^(m+n); (a^m)^n = a^(mn); a^m / a^n = a^(m−n).</p>
        <p>9.3 Zero and Negative Exponents: a^0 = 1; a^−n = 1/a^n.</p>
        <p>9.4 Scientific Notation: Express numbers as a×10^n, where 1≤a<10.</p>
    </ul>
`,

        10: `
    <h2>10. Polynomials</h2>
    <ul>
        <p>10.1 Add and Subtract Polynomials: Combine like terms.</p>
        <p>10.2 Multiply Polynomials: Use distributive property or FOIL.</p>
        <p>10.3 Polynomial Equations in Factored Form: Set each factor = 0 to solve.</p>
        <p>10.4 Factor x² + bx + c: Find two numbers that multiply to c, add to b.</p>
        <p>10.5 Factor ax² + bx + c: Multiply a·c, find two numbers that multiply to a·c and add to b.</p>
        <p>10.6 Factor Special Products: Difference of squares: a²−b²=(a−b)(a+b); Perfect square: a²+2ab+b²=(a+b)².</p>
    </ul>
`,

        11: `
    <h2>11. Square Roots and Radicals</h2>
    <ul>
        <p>11.1 Simplifying Radicals: Factor out perfect squares; √(a²b)=a√b.</p>
        <p>11.2 Operations with Square Roots: Add/subtract like radicals; multiply/divide using √a⋅√b=√(ab).</p>
    </ul>
`,

        12: `
    <h2>12. Quadratic Functions</h2>
    <ul>
        <p>12.1 Graphing Quadratics in Standard Form: y=ax²+bx+c; vertex, axis of symmetry, direction (up/down).</p>
        <p>12.2 Solve Quadratics by Graphing: Plot parabola; x-intercepts = solutions.</p>
        <p>12.3 Solve Quadratics using Square Roots: Isolate x², then take ±√.</p>
        <p>12.4 Solve Quadratics using Quadratic Formula: x = [-b ± √(b²−4ac)] / 2a.</p>
    </ul>
`


    },

    geometry: {
        1: `
    <h2>1. Tools for Geometry</h2>
    <ul>
        <p>1.1 Points, Lines, and Planes: Points = location, lines = infinite in both directions, planes = flat surfaces extending infinitely.</p>
        <p>1.2 Measuring Segments: Use distance formula or ruler; segment length = difference of endpoints.</p>
        <p>1.3 Measuring Angles: Use protractor; angles measured in degrees.</p>
        <p>1.4 Addition Postulate: Whole = sum of parts; segment/angle addition.</p>
        <p>1.5 Angle Pairs: Complementary (sum 90°), supplementary (sum 180°), vertical, adjacent angles.</p>
    </ul>
`,

        2: `
    <h2>2. Reasoning and Proofs</h2>
    <ul>
        <p>2.1 Reasoning and Proof: Use logic to justify conclusions; inductive = patterns, deductive = rules.</p>
        <p>2.2 Intro to Proofs: Write steps with given information, definitions, postulates, theorems.</p>
        <p>2.3 More with Proofs: Use properties and previous results to complete two-column or paragraph proofs.</p>
    </ul>
`,

        3: `
    <h2>3. Parallel and Perpendicular Lines</h2>
    <ul>
        <p>3.1 Lines and Angles: Angles formed by transversals: corresponding, alternate interior/exterior, same-side interior.</p>
        <p>3.2 Properties of Parallel Lines: Corresponding angles =, alternate interior =, alternate exterior =, same-side interior supplementary.</p>
        <p>3.3 Proving Lines Parallel: Show angles congruent or supplementary using theorems.</p>
        <p>3.4 Parallel Lines and Triangles: Use triangle angle relationships to prove parallel lines.</p>
        <p>3.5 Equations of Lines in the Coordinate Plane: Slope-intercept y=mx+b or point-slope form.</p>
        <p>3.6 Slopes of Parallel and Perpendicular Lines: Parallel → same slope; Perpendicular → opposite reciprocal.</p>
    </ul>
`,

        4: `
    <h2>4. Triangle Congruence</h2>
    <ul>
        <p>4.1 Triangles: Classification by sides (equilateral, isosceles, scalene) or angles (acute, right, obtuse).</p>
        <p>4.2 SSS and SAS: Side-Side-Side and Side-Angle-Side congruence postulates.</p>
        <p>4.3 ASA and AAS: Angle-Side-Angle and Angle-Angle-Side congruence postulates.</p>
        <p>4.4 CPCTC and HL: Corresponding Parts of Congruent Triangles are Congruent; Hypotenuse-Leg for right triangles.</p>
    </ul>
`,

        5: `
    <h2>5. Polygons and Quadrilaterals</h2>
    <ul>
        <p>5.1 Polygon Angles: Sum of interior angles = (n−2)×180°; each exterior angle = 360° ÷ n.</p>
        <p>5.2 Parallelogram Properties: Opposite sides/angles equal, diagonals bisect each other.</p>
        <p>5.3 Conditions for Proving Parallelograms: Opposite sides parallel, opposite sides equal, diagonals bisect.</p>
        <p>5.4 Rhombus and Rectangles: Rhombus → all sides equal; rectangle → all angles 90°.</p>
        <p>5.5 Conditions for proving Rhombus and Rectangles: Use sides, angles, diagonals properties.</p>
        <p>5.6 Kites and Trapezoids: Kites → 2 pairs of adjacent equal sides; Trapezoids → one pair of parallel sides.</p>
    </ul>
`,

        6: `
    <h2>6. Similar Figures</h2>
    <ul>
        <p>6.1 Similar Figures: Same shape, proportional sides, corresponding angles congruent.</p>
        <p>6.2 Prove Triangles Similar: AA, SAS, SSS similarity postulates.</p>
        <p>6.3 Side Splitter Theorem: A line parallel to one side of a triangle divides the other two sides proportionally.</p>
    </ul>
`,

        7: `
    <h2>7. Right Triangles</h2>
    <ul>
        <p>7.1 Pythagorean Theorem and Its Converse: a² + b² = c²; converse checks right triangle.</p>
        <p>7.2 Special Right Triangles Part I: 45°-45°-90° → legs equal, hypotenuse = leg√2.</p>
        <p>7.3 Special Right Triangles Part II: 30°-60°-90° → short leg, long leg = short√3, hypotenuse = 2×short.</p>
        <p>7.4 Trig Ratios: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.</p>
        <p>7.5 Inverse Trig Functions: Use to find angle from ratio; e.g., θ = sin⁻¹(opposite/hypotenuse).</p>
    </ul>
`,

        8: `
    <h2>8. Transformations</h2>
    <ul>
        <p>8.1 Transformations and Translations: Slide figure without changing shape/size.</p>
        <p>8.2 Reflections: Flip over line; create mirror image.</p>
        <p>8.3 Rotations: Turn figure around a point by a given angle.</p>
    </ul>
`,

        9: `
    <h2>9. Area of Polygons</h2>
    <ul>
        <p>9.1 Parallelograms and Triangles: Parallelogram = base×height; triangle = ½×base×height.</p>
        <p>9.2 Trapezoids, Kites, and Rhombi: Trapezoid = ½(h)(b₁+b₂); kite/rhombus = ½(diagonal₁×diagonal₂).</p>
        <p>9.3 Regular Polygons: Area = ½×perimeter×apothem.</p>
        <p>9.4 Circles and Arcs: Circle area = πr²; circumference = 2πr; arc length = (θ/360)×2πr.</p>
        <p>9.5 Sectors and Segments: Sector = (θ/360)×πr²; segment = sector − triangle area.</p>
    </ul>
`,

        10: `
    <h2>10. Surface Area and Volume</h2>
    <ul>
        <p>10.1 SA of Prisms and Cylinders: Prism = sum of lateral faces + 2 bases; Cylinder = 2πr² + 2πrh.</p>
        <p>10.2 SA of Pyramids and Cones: Pyramid = base + ½ perimeter×slant height; Cone = πr² + πrℓ.</p>
        <p>10.3 Volume of Prisms and Cylinders: Prism = B×h; Cylinder = πr²h.</p>
        <p>10.4 Volume of Pyramids and Cones: Pyramid = ⅓B×h; Cone = ⅓πr²h.</p>
        <p>10.5 SA and Volume of Spheres: SA = 4πr²; Volume = ⁴/₃πr³.</p>
    </ul>
`,

        11: `
    <h2>11. Circles</h2>
    <ul>
        <p>11.1 Tangents to Circles: Tangent ⊥ radius at point of contact.</p>
        <p>11.2 Chords and Arcs: Equal chords → equal arcs; perpendicular bisector passes through center.</p>
        <p>11.3 Intercepted Arcs: Angle formed by secant/tangent = ½ intercepted arc.</p>
        <p>11.4 Secants and Tangents: Angle = ½(outer − inner) or ½ intercepted arc depending on configuration.</p>
    </ul>
`,

        12: `
    <h2>12. Probability</h2>
    <ul>
        <p>12.1 Introduction to Probability: Probability = favorable ÷ total outcomes.</p>
        <p>12.2 More Probability: Compound events: use multiplication rule (independent) or addition rule (mutually exclusive).</p>
    </ul>
`,

    },

    algebra2: {
        1: `
            <h2>Unit 1 - Algebra Basics</h2>
            <p>1.1 Return to Algebra: Review expressions, order of operations, properties of numbers.</p>
            <p>1.2 Solving Equations and Inequalities: One-step, two-step, multi-step; flip inequality when multiplying/dividing by negative.</p>
            <p>1.3 Absolute Value Equations: |x| = a → x = ±a.</p>
            <p>1.4 Rewriting Equations: Solve for a specified variable; use inverse operations.</p>
        `,
        2: `
            <h2>Unit 2 - Linear Functions</h2>
            <p>2.1 Function Notation: f(x) = output for input x.</p>
            <p>2.2 Represent Functions and Relations: Tables, graphs, rules; each input has one output.</p>
            <p>2.3 Find Slope and Rate of Change: Slope m = change in y / change in x.</p>
            <p>2.4 Graph Equations of Lines: Use slope-intercept or points.</p>
            <p>2.5 Writing Equations of Lines: Use point-slope or slope-intercept form.</p>
        `,
        3: `
            <h2>Unit 3 - Absolute Value & Piecewise Functions</h2>
            <p>3.1 Absolute Value Inequalities: |x| < a → -a < x < a; |x| > a → x < -a or x > a.</p>
            <p>3.2 Absolute Value Graphs: V-shaped graph, vertex at equation = 0.</p>
            <p>3.3 Piecewise Functions: Different rules for different intervals of x.</p>
        `,
        4: `
            <h2>Unit 4 - Linear Systems of Equations</h2>
            <p>4.1 Solving Linear Systems Graphically: Intersection of lines = solution.</p>
            <p>4.2 Solving Linear Systems Algebraically: Use substitution or elimination.</p>
            <p>4.3 Solving Linear Inequalities: Graph each inequality; solution = shaded region.</p>
        `,
        5: `
            <h2>Unit 5 - Quadratics</h2>
            <p>5.1 Graph Quadratics in Vertex Form: y = a(x−h)^2 + k, vertex = (h,k).</p>
            <p>5.2 Graph Quadratics in Standard Form: y = ax^2 + bx + c; find vertex using x = -b/2a.</p>
            <p>5.3 Solving Quadratics by Factoring: Factor → set each factor = 0.</p>
            <p>5.4 GCF and DoS: Factor out GCF; Difference of Squares: a^2 - b^2 = (a-b)(a+b).</p>
            <p>5.5 Solving Quadratics by Finding Square Roots: Isolate x^2, then ±√.</p>
        `,
        6: `
            <h2>Unit 6 - Non Real Numbers</h2>
            <p>6.1 Imaginary and Complex Numbers: i = √-1; complex numbers = a + bi.</p>
            <p>6.2 Operations on Complex Numbers: Add/subtract combine like terms; multiply/distribute; divide using conjugate.</p>
            <p>6.3 Completing the Square: Make perfect square trinomial to solve quadratic.</p>
            <p>6.4 Quadratic Formula: x = (-b ± √(b^2 - 4ac)) / 2a.</p>
        `,
        7: `
            <h2>Unit 7 - Polynomial Functions</h2>
            <p>7.1 Exponent Properties: Add, multiply, divide powers; zero and negative exponents.</p>
            <p>7.2 Polynomial Division: Long division or synthetic division.</p>
            <p>7.3 Solving Polynomial Functions by Factoring: Factor completely, set each factor = 0.</p>
            <p>7.4 Graphs of Polynomial Functions: End behavior based on degree/sign; zeros = x-intercepts.</p>
        `,
        8: `
            <h2>Unit 8 - Rational Exponents & Radical Functions</h2>
            <p>8.1 Evaluate Nth Roots: a^(1/n) = number that raised to n = a.</p>
            <p>8.2 Properties of Rational Exponents: a^(m/n) = n√(a^m).</p>
            <p>8.3 Function Operations and Composition: Add, subtract, multiply, divide, and combine functions f(g(x)).</p>
            <p>8.4 Inverse Operations: Undo functions; switch x and y.</p>
            <p>8.5 Graph Square and Cube Root Functions: √x → half parabola; ∛x → S-shaped curve.</p>
            <p>8.6 Solving Radical Equations: Isolate radical, raise both sides to power, check for extraneous solutions.</p>
        `,
        9: `
            <h2>Unit 9 - Exponential and Logarithmic Functions</h2>
            <p>9.1 Exponential Growth: y = a(1+r)^t or y = ae^(kt).</p>
            <p>9.2 Exponential Decay: y = a(1-r)^t.</p>
            <p>9.3 The Number e: Base of natural exponent, ≈ 2.718, used in continuous growth/decay.</p>
            <p>9.4 Intro to Logarithms: log_b(x) = y → b^y = x.</p>
            <p>9.5 Properties of Logarithms: Product, quotient, power rules.</p>
            <p>9.6 Solve Exponent & Log Equations: Use log or exponent rules to isolate variable.</p>
        `,
        10: `
            <h2>Unit 10 - Rational Functions</h2>
            <p>10.1 Graphing Rational Functions: Identify asymptotes (vertical = zeros of denom, horizontal = ratio of leading coefficients).</p>
            <p>10.2 Multiply & Divide Rational Expressions: Factor, cancel common terms.</p>
            <p>10.3 Add & Subtract Rational Expressions: Find LCD, combine numerators.</p>
            <p>10.4 Solve Rational Equations: Multiply both sides by LCD, solve like polynomial equation.</p>
        `,
        11: `
            <h2>Unit 11 - Conic Sections</h2>
            <p>11.1 Parabolas: Vertex form y = a(x−h)^2 + k, focus/directrix, axis of symmetry.</p>
            <p>11.2 Ellipses and Circles: Circle: (x−h)^2 + (y−k)^2 = r^2; Ellipse: (x−h)^2/a^2 + (y−k)^2/b^2 = 1.</p>
            <p>11.3 Hyperbolas: (x−h)^2/a^2 − (y−k)^2/b^2 = 1 or vice versa; asymptotes: y = ±(b/a)x.</p>
            <p>11.4 Classifying Conics: Use general form Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0.</p>
        `,
        12: `
            <h2>Unit 12 - Matrices</h2>
            <p>12.1 Matrix Operations: Add/subtract = element-wise; scalar multiplication = multiply each entry.</p>
            <p>12.2 Matrix Multiplication: Rows × columns; order matters.</p>
            <p>12.3 Inverse Matrices: Multiply by inverse = identity matrix; only for square matrices.</p>
            <p>12.4 Encoding Messages: Use matrices to encrypt/decrypt using multiplication with key matrix.</p>
        `
    },


    precalculus: {
        1: `
            <h2>1. Intro Skills</h2>
            <p>1.1 Multiple Representations: Represent functions as tables, graphs, and equations.</p>
            <p>1.2 Linear Functions: Graph lines, find slope, y-intercept, and equation of a line.</p>
            <p>1.3 Basic Factoring: Factor out GCF, trinomials, difference of squares.</p>
        `,
        2: `
            <h2>2. Functions and Limits</h2>
            <p>2.1 Function Intro: Each input has exactly one output; notation f(x).</p>
            <p>2.2 Domain & Range Graphically: Domain = all x-values; Range = all y-values.</p>
            <p>2.3 Limit at a Point Graphically: Value y approaches as x → a.</p>
            <p>2.4 Limits Involving Infinity Graphically: Behavior as x → ∞ or −∞.</p>
        `,
        3: `
            <h2>3. Function Analysis</h2>
            <p>3.1 Domain & Discontinuities Algebraically: Identify where function is undefined or has holes/jumps.</p>
            <p>3.2 Extrema: Local maxima and minima; use derivative or graph.</p>
            <p>3.3 Piecewise Functions: Different rules for different intervals; graph each piece.</p>
        `,
        4: `
            <h2>4. Function Algebra</h2>
            <p>4.1 Transformations: Shifts, stretches, reflections of functions.</p>
            <p>4.2 Even and Odd Functions: Even = symmetric about y-axis; Odd = symmetric about origin.</p>
            <p>4.3 Operations with Functions: Add, subtract, multiply, divide functions.</p>
            <p>4.4 Inverse Functions: Swap x and y; undo original function.</p>
        `,
        5: `
            <h2>5. Polynomials</h2>
            <p>5.1 Operations on Polynomials: Add, subtract, multiply polynomials.</p>
            <p>5.2 Polynomial Division & Factor Theorem: Divide polynomials; factor theorem finds zeros.</p>
            <p>5.3 Polynomial Graphs: End behavior = degree/sign; zeros = x-intercepts.</p>
        `,
        6: `
            <h2>6. Rational Functions</h2>
            <p>6.1 Solve Rational Equations: Multiply by LCD; check for extraneous solutions.</p>
            <p>6.2 Rational Functions: Domain excludes zeros of denominator.</p>
            <p>6.3 Graphing Rational Functions: Identify vertical/horizontal asymptotes; plot points.</p>
            <p>6.4 Variation: Direct (y=kx) and inverse (y=k/x) variation relationships.</p>
        `,
        7: `
            <h2>7. Exponential & Logarithmic Functions</h2>
            <p>7.1 Exponential Functions: Growth/decay: y = a*b^x or y = a*e^(kx).</p>
            <p>7.2 Logarithms: log_b(x) = y → b^y = x</p>
            <p>7.3 Solve Exponential/Logarithmic Equations: Use log/exponent rules to isolate x.</p>
        `,
        8: `
            <h2>8. Intro to Trigonometry</h2>
            <p>8.1 Angles and Degrees: Measure angles in degrees.</p>
            <p>8.2 Radians: θ (in radians) = arc length / radius.</p>
            <p>8.3 Velocity (Angular vs Linear): ω = angular velocity, v = r·ω.</p>
            <p>8.4 Basic Trig Functions: sin = opp/hyp, cos = adj/hyp, tan = opp/adj.</p>
        `,
        9: `
            <h2>9. Unit Circle</h2>
            <p>9.1 Reference Triangle & Reciprocal Trig: csc=1/sin, sec=1/cos, cot=1/tan.</p>
            <p>9.2 Reference and Special Angles: 30°, 45°, 60° triangles; radians.</p>
            <p>9.3 Evaluating Trig Functions: Use unit circle coordinates or triangles.</p>
        `,
        10: `
            <h2>10. Graphing Trig Functions</h2>
            <p>10.1 Graph Sine and Cosine: Amplitude, period, midline, phase shift.</p>
            <p>10.2 Phase Shift: Horizontal shift of trig graph.</p>
            <p>10.3 Reciprocal Trig Functions: Graph csc, sec, cot using asymptotes.</p>
            <p>10.4 Inverse Trig Functions: sin⁻¹, cos⁻¹, tan⁻¹; output = angle.</p>
        `,
        11: `
            <h2>11. Trig Identities</h2>
            <p>11.1 Reciprocal Identities: csc=1/sin, sec=1/cos, cot=1/tan</p>
            <p>11.2 Pythagorean Identities: sin²x+cos²x=1, 1+tan²x=sec²x, 1+cot²x=csc²x</p>
            <p>11.3 Sum and Difference Identities: sin(a±b), cos(a±b) formulas</p>
            <p>11.4 Double and Half Angle Identities: sin2x, cos2x, sin(x/2), cos(x/2)</p>
            <p>11.5 Trig Equations: Solve using identities, factoring, or algebra.</p>
        `,
        12: `
            <h2>12. Solve Triangles</h2>
            <p>12.1 Law of Sines: a/sinA = b/sinB = c/sinC</p>
            <p>12.2 Law of Cosines: c² = a² + b² − 2ab·cosC</p>
            <p>12.3 Area of Triangles: ½ab·sinC</p>
        `,
        13: `
            <h2>13. Coordinate Systems</h2>
            <p>13.1 3D and Complex Planes: Points in 3D (x, y, z); complex plane = a + bi.</p>
            <p>13.2 Polar Coordinates: (r, θ); x = rcosθ, y = rsinθ.</p>
        `,
        14: `
            <h2>14. Series and Sequences</h2>
            <p>14.1 Series and Summation: Sum notation ∑; finite and infinite series.</p>
            <p>14.2 Arithmetic vs Geometric: Arithmetic: add constant; Geometric: multiply by ratio.</p>
            <p>14.3 Binomial Theorem: Expand (a+b)ⁿ using combinations.</p>
        `,
        15: `
            <h2>15. Calculus Intro</h2>
            <p>15.1 Limits Analytically: lim x→a f(x) = L; compute using substitution or factoring.</p>
            <p>15.2 Definition of the Derivative: f'(x) = lim h→0 (f(x+h)-f(x))/h</p>
            <p>15.3 Power Rule: d/dx [xⁿ] = n·xⁿ⁻¹</p>
        `,
    }
};
