import MinimalProfileStatic from '@/components/MinimalProfileStatic'
import SkillsGridStatic from '@/components/SkillsGridStatic'
import ThreeDCardStatic from '@/components/ThreeDCardStatic'
import CustomSectionCardStatic from '@/components/CustomSectionCardStatic'
import CustomSectionListStatic from '@/components/CustomSectionListStatic'
import CustomSectionTimelineStatic from '@/components/CustomSectionTimelineStatic'
import portfolioData from '@/data/portfolio.json'

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <MinimalProfileStatic personal={portfolioData.personal} />
        {portfolioData.education && <CustomSectionCardStatic section={{
          section_name: "Education",
          layout_type: "card",
          items: portfolioData.education.map((edu, index) => {
            const dateStr = `${edu.start_year || ''} - ${edu.end_year || ''}`.trim();
            return {
            primaryTitle: edu.university ?? undefined,
            secondaryTitle: edu.degree ?? undefined,
            dateInfo: dateStr === '-' ? undefined : dateStr || undefined,
            location: edu.location ?? undefined,
            description: edu.description ?? undefined,
            logoUrl: edu.logoUrl ?? undefined,
            customLinks: edu.custom_links
          }})
        }} />}
        {portfolioData.customSections && portfolioData.customSections.find(s => s.id === "5b70de53-8ee8-48f6-8808-786955d7bbec") && (() => {
          const section = portfolioData.customSections.find(s => s.id === "5b70de53-8ee8-48f6-8808-786955d7bbec")
          const layoutMap: { [key: string]: any } = {
            'card': CustomSectionCardStatic,
            'list': CustomSectionListStatic,
            'timeline': CustomSectionTimelineStatic
          }
          const LayoutComponent = layoutMap[section!.layout_type] || CustomSectionCardStatic
          return <LayoutComponent section={section} />
        })()}
        {portfolioData.workExperience && <CustomSectionCardStatic section={{
          section_name: "Work Experience",
          layout_type: "card",
          items: portfolioData.workExperience.map((exp, index) => {
            const dateStr = `${exp.start_date || ''} - ${exp.end_date || ''}`.trim();
            return {
            primaryTitle: exp.company ?? undefined,
            secondaryTitle: exp.position ?? undefined,
            dateInfo: dateStr === '-' ? undefined : dateStr || undefined,
            location: exp.location ?? undefined,
            description: exp.description ?? undefined,
            logoUrl: exp.logoUrl ?? undefined,
            customLinks: exp.custom_links
          }})
        }} />}
        {portfolioData.projects && <ThreeDCardStatic projects={portfolioData.projects} />}
        {portfolioData.skills && <SkillsGridStatic skills={portfolioData.skills} />}
      </div>
    </main>
  )
}