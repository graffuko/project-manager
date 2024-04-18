'use client';

import { useEffect, useState } from "react";
import axios from 'axios';
import { Project } from '@/models/project';
import ProjectTable from '@/components/projecttable/projecttable';
import Model from '@/components/model/model';
import ProjectForm from '@/components/projectform/projectform';

export default function Home() {
  const [projects, setProjects] = useState<null | Project[]>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get('/api/projects');
      
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Model isVisable />
      <ProjectForm isVisible toggleProjectForm={() => {}}/>
      <button className='relative outline-none inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 hover:text-white focus:ring-blue-300'>
        <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
          Create Project
          </span>
      </button>
      {projects && <ProjectTable projects={projects} />}
    </>
  );
}
