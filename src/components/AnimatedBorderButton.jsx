const AnimatedBorderButton = ({children}) =>{
return(
<button className="group relative bg-blue-600 border border-blue-600 text-foreground hover:bg-blue-600/90 transition-all duration-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-8 py-4 text-lg font-medium rounded-full overflow-visible animated-border shadow-lg shadow-blue-600/25">
{/*Animated SVG border*/}
   <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
    viewBox="0 0 200 60"
  >
    <rect
      x="1"
      y="1"
      width="198"
      height="58"
      rx="30"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeDasharray="120 300"
      className="animated-border-path"
    />
  </svg>
<span className=" flex items-center gap-2 justify-center">{children}</span>
</button>
);
}
export default AnimatedBorderButton;