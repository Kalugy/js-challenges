import { useTheme } from "../context/ThemeContext";

export default function HomePage() {
  const { theme } = useTheme()
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Daily JavaScript Challenges</h1>
      
      <p className="text-lg mb-6">
        This platform is designed to help you practice and memorize JavaScript methods and concepts through daily exercises. Whether you are just starting out or looking to strengthen your skills, these challenges are crafted to make learning interactive and fun.
      </p>
      {/* <p className="text-lg mb-6">
        <strong>Steps</strong>: Memorize and then challenge yourself resolving some algorithms!!
      </p> */}
      <section className={`p-4 rounded shadow-md mb-6`}
        style={{
          backgroundColor: theme.secondaryBg,
        }}
        >
        <h2 className={`text-2xl font-semibold mb-2 `}>Why Practice Daily?</h2>
        <ul className="list-disc pl-6 ">
          <li>Build muscle memory for common JavaScript methods</li>
          <li>Prepare for coding interviews with hands-on practice</li>
          <li>Enhance your problem-solving skills</li>
        </ul>
      </section>
      <section 
        className=" p-4 rounded shadow-md mb-6"
        style={{
          backgroundColor: theme.secondaryBg,
        }}
      >
        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
        <ol className="list-decimal pl-6 ">
          <li>Navigate to the <strong>Challenge</strong> section.</li>
          <li>Write your solution in the provided input field.</li>
          <li>Run or submit your solution to compare it with the correct answer.</li>
        </ol>
      </section>
      <section 
        className=" p-4 rounded shadow-md mb-6"
        style={{
          backgroundColor: theme.secondaryBg,
        }}
      >
        <h2 className="text-2xl font-semibold mb-2">Customize</h2>
        <ul className="list-disc pl-6 ">
          <li>Add, edit, or delete challenges in the <strong>Custom</strong> view.</li>
          <li>Use shortcuts for faster code debugging in the <strong>Settings</strong> view.</li>
          <li>Customize the theme using palette colors in the <strong>Settings</strong> view.</li>
        </ul>
      </section>
      <footer className="text-center mt-6">
        <p className="">Start your journey today and master JavaScript, one challenge at a time!</p>
      </footer>
    </div>
  );
}
