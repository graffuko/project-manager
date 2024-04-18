'use client';

import { useEffect, useState } from "react";
import axios from 'axios';
import { Project } from '@/models/project';
import ProjectTable from '@/components/projecttable/projecttable';


export default function Home() {
  const [projects, setProjects] = useState<null | Project[]>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get('/api/projects');
      
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return <>
  {projects && <ProjectTable projects={projects} />}</>;
  
}
