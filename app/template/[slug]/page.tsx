import BackButton from "@/components/BackButton";
import { fetchTemplates } from "@/lib/supabase/data-fetching";
import { Template } from "@/types/database";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = false;

async function getTemplates() {
  return await fetchTemplates();
}

export async function generateStaticParams() {
  const templates = await getTemplates();
  return templates.map((template: Template) => ({
    slug: template.slug,
  }));
}

interface TemplateDetailPageProps {
  params: Promise<{ slug: string }>;
}

const TemplateDetailPage = async ({ params }: TemplateDetailPageProps) => {
  const { slug } = await params;
  const templates = await getTemplates();
  const template = templates.find((t: Template) => t.slug === slug);

  if (!template) {
    return (
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <div className="text-center p-8 bg-transparent border border-gray-700 rounded-xl ">
          <h1 className="text-2xl font-bold text-white mb-4">
            Template not found
          </h1>
          <Link
            href="/template"
            className="flex items-center text-foreground/90 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-secondary/20 py-8 sm:py-12 md:py-20 lg:py-28">
      <div className="max-w-5xl mx-auto text-white ">
        {/* Navigation */}
        <nav className="border-b border-gray-700 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <div className="flex items-center justify-between">
              <BackButton title="Back to Templates" />

              <h1 className="text-lg md:text-xl font-semibold">
                Template Details
              </h1>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-0 py-8">
          {/* Template Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{template.name}</h2>
              </div>

              {/* Price */}
              <div className="text-right">
                <div className="text-2xl text-primary font-semibold mb-2">
                  {!isNaN(Number(template.price)) && template.price !== ""
                    ? `$${template.price}`
                    : template.price}
                </div>
              </div>
            </div>

            {/* Template Image */}
            <div className="relative bg-transparent rounded-xl overflow-hidden mb-8 border border-gray-700 p-2">
              <Image
                src={template.image}
                alt={template.name}
                width={1400}
                height={1000}
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Description & Features */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-transparent border border-gray-700 rounded-xl p-6 mb-6">
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-4 whitespace-pre-line">
                    {template.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="bg-transparent border border-gray-700 rounded-xl p-6 ">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {template.features?.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Action Buttons & Specifications */}
            <div className="space-y-6">
              {/* Demo Button */}
              <div className="bg-transparent border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Live Demo</h3>
                <p className="text-gray-300 mb-4">
                  Check out the live version of this template
                </p>
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Live Demo
                </a>
              </div>

              {/* Purchase Button */}
              <div className="bg-transparent border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Get This Template
                </h3>
                <p className="text-gray-300 mb-4">
                  Buy and download the complete template
                </p>
                <div className="space-y-3">
                  <a
                    href={template.gumroadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-700  text-white font-medium rounded-lg hover:bg-[#FF90E8] hover:text-black transition-colors"
                  >
                    <Image
                      src="/gumroad-logo.png"
                      alt="Gumroad"
                      width={40}
                      height={40}
                    />
                    Buy on Gumroad
                  </a>

                  <a
                    href={template.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-transparent border border-gray-700 text-green-500 hover:text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.897 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                    </svg>
                    <span className="text-white">Contact via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-transparent border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="font-medium capitalize">
                      {template.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Framework:</span>
                    <span className="font-medium">{template.framework}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Styling:</span>
                    <span className="font-medium">{template.styling}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">License:</span>
                    <span className="font-medium">Commercial</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Updates:</span>
                    <span className="font-medium text-primary">Included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TemplateDetailPage;
