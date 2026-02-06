export default function Loading() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-purple-500/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
                </div>
                <p className="text-gray-400 text-sm">Loading...</p>
            </div>
        </div>
    );
}
