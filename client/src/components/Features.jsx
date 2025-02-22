
const Features = () => {
    const features = [
        { icon: "📝", title: "Task Organization", description: "Easily create, prioritize, and track tasks." },
        { icon: "👥", title: "Team Collaboration", description: "Share tasks, assign responsibilities, and collaborate in real-time." },
        { icon: "🛠️", title: "Customizable Workflows", description: "Tailor your workflow to fit your needs." },
        { icon: "📱", title: "Cross-Platform Sync", description: "Access your tasks from anywhere, on any device." },
      ];
    return (
        <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white shadow-md rounded-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Features;