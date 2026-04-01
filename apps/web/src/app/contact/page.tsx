export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-10">Spill it</h1>

      <form className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
              Name
            </label>
            <input
              required
              className="w-full border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
            Subject
          </label>
          <input
            required
            className="w-full border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none bg-transparent"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-widest mb-1">
            Message
          </label>
          <textarea
            required
            rows={6}
            className="w-full border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none bg-transparent resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-3 text-sm font-medium hover:bg-stone-800 transition-colors rounded-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
