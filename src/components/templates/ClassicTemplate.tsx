
import { ResumeData } from "../../pages/ResumeBuilder";

interface ClassicTemplateProps {
  data: ResumeData;
}

const ClassicTemplate = ({ data }: ClassicTemplateProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {data.personalInfo.email && <span>{data.personalInfo.email}</span>}
          {data.personalInfo.phone && <span>|</span>}
          {data.personalInfo.phone && <span>{data.personalInfo.phone}</span>}
          {data.personalInfo.location && <span>|</span>}
          {data.personalInfo.location && <span>{data.personalInfo.location}</span>}
        </div>
        {data.personalInfo.linkedin && (
          <div className="mt-1 text-sm text-gray-600">{data.personalInfo.linkedin}</div>
        )}
      </div>

      {/* Summary */}
      {data.summary && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-2 uppercase tracking-wide">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">{data.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.workExperience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                    <p className="text-gray-700 font-medium">
                      {exp.company} {exp.location && `- ${exp.location}`}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                {exp.description && (
                  <p className="text-gray-700 text-sm leading-relaxed mt-2">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-700">{edu.school}</p>
                  {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                </div>
                <div className="text-right text-sm text-gray-600">
                  {edu.graduationDate && <p>{new Date(edu.graduationDate).getFullYear()}</p>}
                  {edu.gpa && <p>GPA: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-3 uppercase tracking-wide">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 gap-2">
            {data.skills.technical.length > 0 && (
              <div>
                <span className="font-medium text-gray-900">Technical: </span>
                <span className="text-gray-700 text-sm">{data.skills.technical.join(", ")}</span>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <span className="font-medium text-gray-900">Professional: </span>
                <span className="text-gray-700 text-sm">{data.skills.soft.join(", ")}</span>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <span className="font-medium text-gray-900">Languages: </span>
                <span className="text-gray-700 text-sm">{data.skills.languages.join(", ")}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
