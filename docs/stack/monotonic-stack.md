# Monotonic Stack

- **prev smaller element (_PSE_)**: for each element, find the first element to its _left_ that is strictly smaller than it.
- **Next smaller element (_NSE_)**: for each element, find the first element to its _right_ that is strictly smaller than it.

$$
\begin{array}
  {lrrrrr}
  \hline 
  \textbf{value} & 4 & 5 & 2 & 10 & 8 \\
  \hline 
  \textbf{PSE} & -1 & 4 & -1 & 2 & 2 \\  
  \textbf{NSE} & 2 & 2 & -1 & 8 & -1 \\ 
  \hline 
\end{array}
$$

??? "Brute force"

    The first thing that comes to mind, is for each index, scan left/right until you find something smaller. Issue with that is it'll be $O(N^2)$ cost.

