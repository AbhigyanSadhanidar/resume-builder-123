
import { ResumeData } from "../../pages/ResumeBuilder";

interface CreativeTemplateProps {
  data: ResumeData;
}

const CreativeTemplate = ({ data }: CreativeTemplateProps) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 -m-8 mb-6 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-2">
          {data.personalInfo.fullName || "Your Name"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {data.personalInfo.email && <div>📧 {data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>📱 {data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>📍 {data.personalInfo.location}</div>}
          {data.personalInfo.linkedin && <div>💼 {data.personalInfo.linkedin}</div>}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div>
          <h2 className="text-lg font-bold text-purple-600 mb-2 flex items-center">
            <span className="w-2 h-6 bg-gradient-to-b from-purple-600 to-pink-600 mr-3 rounded"></span>
            About Me
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed pl-5">{data.summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-2 h-6 bg-gradient-to-b from-purple-600 to-pink-600 mr-3 rounded"></span>
            Experience
          </h2>
          <div className="space-y-4 pl-5">
            {data.workExperience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{exp.jobTitle}</h3>
                  <span className="text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
                    {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                  </span>
                </div>
                <p className="text-pink-600 font-semibold text-sm mb-2">
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
          <h2 className="text-lg font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-2 h-6 bg-gradient-to-b from-purple-600 to-pink-600 mr-3 rounded"></span>
            Education
          </h2>
          <div className="space-y-3 pl-5">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-pink-600 font-medium">{edu.school}</p>
                  {edu.location && <p className="text-gray-600 text-sm">{edu.location}</p>}
                </div>
                <div className="text-right text-sm">
                  {edu.graduationDate && (
                    <p className="text-purple-600 font-medium">
                      {new Date(edu.graduationDate).getFullYear()}
                    </p>
                  )}
                  {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {(data.skills.technical.length > 0 || data.skills.soft.length > 0 || data.skills.languages.length > 0) && (
        <div>
          <h2 className="text-lg font-bold text-purple-600 mb-3 flex items-center">
            <span className="w-2 h-6 bg-gradient-to-b from-purple-600 to-pink-600 mr-3 rounded"></span>
            Skills & Expertise
          </h2>
          <div className="space-y-3 pl-5">
            {data.skills.technical.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">🔧 Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.technical.map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.skills.soft.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">🤝 Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.soft.map((skill) => (
                    <span key={skill} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {data.skills.languages.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">🌍 Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.languages.map((skill) => (
                    <span key={skill} className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeTemplate;
