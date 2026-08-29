# Vectors

In linear algebra, a _vector_ is an ordered list of numbers. Vectors have two key characteristics:

_Dimensionality_
: The number of numbers in the vectors

_Orientation_
: Whether the vector is in column orientation (tall) or row orientation (long).

$\mathbb R^N$ refers to a dimensionality of $N$ for a vector made up of real numbers.

<div class="grid" markdown>

$$
\mathbf x = \begin{bmatrix}1 \\ 4 \\ 5 \\ 6\end{bmatrix}
$$

$$
\mathbf y = \begin{bmatrix}.3 & -7\end{bmatrix}
$$

<div style="text-align: center;">A 4D column vector</div>

<div style="text-align: center;">A 2D row vector</div>

</div>

!!! tip "Does orientation matter?"

    Is $\mathbf x$ same as $\mathbf x^T$? Is it same as an orientationless 1D array?

    In machine learning and data science, mathematical orientation is almost entirely irrelevant. It's only need to be accounted for avoid Python errors.

    Additionally, while in mathematics, _dimenionality_ refers to number of elements in a vector. Whereas in Python, a list of numbers is considered a 1D array regardless of number of elements. 

    The mathematical dimentionality is called the _length_ of the vector in Python.