import React from 'react';

export default function Skills() {
  return (
    <div className="flex flex-col mt-5 mb-10 px-5 lg:px-40">
      <div className="text-4xl py-4 mt-8 text-center lg:text-left">Projects and Skills</div>

      <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-white text-sm">
        {[
          'React JS', 'Next JS', 'Node JS', 'Python', 'MySQL', 
          'Firebase', 'Supabase', 'Bootstrap', 'Arduino', 'GitHub',
          'Tailwind CSS', 'React Native', 'Data Structures', 
          'UI/UX Design', 'Circuit Design', 'Circuit Interfacing'
        ].map((skill, index) => (
          <div key={index} className="bg-yellow-600 rounded-2xl px-3 py-2 font-bold">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
