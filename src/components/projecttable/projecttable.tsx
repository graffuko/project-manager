'use client';

import { Project } from "@/models/project";
import { FC } from "react";
import Link from 'next/link';
import { format } from 'date-fns';

type Props = {
    projects: Project[];
}

const ProjectTable: FC<Props> = (props) => {
    const { projects } = props;
    
    return <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-8'>
        <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Name
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Description
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Created At
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        <span className='sr-only'>Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => {
                    const formattedDate = format(new Date(project.createdAt), 'dd/MM/yyyy');
                    return (
                        <tr 
                            key={project.id} 
                            className='bg-white border-b hover:bg-gray-50'
                        >
                        <th 
                            scope='row' 
                            className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer underline'
                        >
                            <Link href={`/project/${project.slug}`}>{project.name}</Link>

                        </th>
                        <td className='px-6 py-4'>{project.description}</td>
                        <td className='px-6 py-4'>{formattedDate}</td>
                        <td className='px-6 py-4 text-right'>
                            <button className=' font-medium text-blue-500 hover:underline'>
                                Edit
                            </button>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </table>
    </div>;
};

export default ProjectTable;