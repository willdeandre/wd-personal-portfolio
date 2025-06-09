export default function Projects() {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-semibold">
        Projects
      </h2>

      <div className="mt-8 space-y-12">

        {/* Example Shiny embed */}
        <div>
          <h3 className="text-2xl font-medium mb-2">
            My Shiny NBA Salary Model
          </h3>
          <p className="text-base sm:text-lg mb-4">
            A dynamic R Shiny app that models NBA player salaries using last season’s stats.
          </p>

          {/* Responsive iframe wrapper */}
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              src="https://willdeandre.shinyapps.io/yourAppName"
              className="absolute inset-0 w-full h-full border rounded"
              title="Shiny NBA Salary Model"
            />
          </div>
        </div>

        {/* You can copy the block above for each project you want to embed */}
      </div>
    </>
  );
}