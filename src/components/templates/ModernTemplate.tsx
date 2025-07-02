
import { ResumeData } from "../../pages/ResumeBuilder";

interface ModernTemplateProps {
  data: ResumeData;
}

const ModernTemplate = ({ data }: ModernTemplateProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b-2 border-blue-600 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {data.personalInfo.email && (
            <span>{data.personalInfo.email}</span>
          )}
          {data.personalInfo.phone && (
            <span>{data.personalInfo.phone}</span>
          )}
          {data.personalInfo.location && (
            <span>{data.personalInfo.location}</span>
          )}
          {data.personalInfo.linkedin && (
            <span>{data.personalInfo.linkedin}</span>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-2">Professional Summary</h2>
          <p className="text-gray-700 text-sm leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-3">Experience</h2>
          <div className="space-y-4">
            {data.workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-gray-900">{exp.jobTitle}</h3>
                  <span className="text-sm text-gray-600">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-3">Education</h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-blue-600 text-sm">{edu.school}</p>
                    {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    {edu.graduationDate && <p>{new Date(edu.graduationDate).getFullYear()}</p>}
                    {edu.gpa && <p>GPA: {edu.gpa}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div>
          <h2 className="text-lg font-semibold text-blue-600 mb-3">Skills</h2>
          <div className="space-y-2">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">Technical Skills</h3>
                <p className="text-gray-700 text-sm">{data.skills.technical.join(" • ")}</p>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">Soft Skills</h3>
                <p className="text-gray-700 text-sm">{data.skills.soft.join(" • ")}</p>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">Languages</h3>
                <p className="text-gray-700 text-sm">{data.skills.languages.join(" • ")}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
