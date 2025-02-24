import { clientLists } from '../utils/clients';

const Clients = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16" id="sponsors">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-8">
          Our Clients
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5
         dark:text-gray-400">
          {clientLists?.map((item, i) => (
            <div className="flex items-center justify-center space-x-3" key={i}>
              <div className="w-28 h-28 rounded-full overflow-hidden border border-slate-700/100">
                <img
                  src={item.image}
                  alt="Sponsor 1 Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
