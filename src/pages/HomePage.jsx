
export default function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Daily JavaScript Challenges</h1>
      <p className="text-lg text-gray-700 mb-6">
        This platform is designed to help you practice and memorize JavaScript methods and concepts through daily exercises. Whether you are just starting out or looking to strengthen your skills, these challenges are crafted to make learning interactive and fun.
      </p>
      <section className="bg-gray-100 p-4 rounded shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Practice Daily?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Build muscle memory for common JavaScript methods</li>
          <li>Prepare for coding interviews with hands-on practice</li>
          <li>Enhance your problem-solving skills</li>
        </ul>
      </section>
      <section className="bg-gray-100 p-4 rounded shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
        <ol className="list-decimal pl-6 text-gray-700">
          <li>go a challenge from the <strong>Challenge</strong> section.</li>
          <li>Write your solution in the provided file.</li>
          <li>Check the solution file to compare and learn.</li>
        </ol>
      </section>
      <footer className="text-center mt-6">
        <p className="text-gray-600">Start your journey today and master JavaScript, one challenge at a time!</p>
      </footer>
    </div>
  );
}
