import { message } from "@/interfaces/interfaces";
import { Key, useState } from "react";

export function ChatHistory({ setMessages }: { setMessages: React.Dispatch<React.SetStateAction<message[]>> }) {
    const [inputText, setInputText] = useState("");
    
    // Sample HR tasks with detailed content and file attachments for demonstration
    const hrTasks: message[] = [
        {
            id: "task-1",
            content: "Salary raise request: John Smith",
            role: "user",
            details: {
                question: "What do you think about the salary raise request submitted by John Smith?",
                status: "Approved",
                reason: "John has consistently exceeded performance targets and taken on additional responsibilities in the last quarter. His salary adjustment of 12% is justified by market research showing our compensation was below industry average for his role and experience level."
            },
            attachment: {
                type: "pdf",
                name: "performance_review.pdf"
            }
        },
        {
            id: "task-2",
            content: "Vacation request: Maria Rodriguez",
            role: "user",
            details: {
                question: "Should we approve Maria Rodriguez's vacation request for next month?",
                status: "Approved",
                reason: "Maria submitted her vacation request well in advance, has sufficient vacation days accrued, and the timing doesn't conflict with any critical project deadlines or team members' schedules."
            }
        },
        {
            id: "task-3",
            content: "Salary raise request: David Chen",
            role: "user",
            details: {
                question: "What do you think about the salary raise request submitted by David Chen?",
                status: "Rejected",
                reason: "While David is a valuable team member, his performance review shows areas needing improvement. The requested 20% increase is significantly above our budget allocation. Recommend revisiting after Q3 with a clearer improvement plan."
            },
            attachment: {
                type: "voice",
                name: "manager_feedback.mp3"
            }
        },
        {
            id: "task-4",
            content: "Remote work request: Sarah Johnson",
            role: "user",
            details: {
                question: "Sarah Johnson has requested to work remotely full-time. What's your assessment?",
                status: "Pending",
                reason: "Need to evaluate team impact and establish clear performance metrics. Sarah's role requires some in-person collaboration, but her performance history suggests she could be effective remotely. Recommend a 3-month trial period with bi-weekly check-ins."
            }
        },
        {
            id: "task-5",
            content: "Vacation request: Michael Thompson",
            role: "user",
            details: {
                question: "Michael Thompson has requested emergency leave for next week. Should we approve?",
                status: "Approved",
                reason: "Given the family emergency circumstances and Michael's good standing, the request should be approved. His team has adequate coverage and his direct manager has already identified how to redistribute his workload temporarily."
            },
            attachment: {
                type: "image",
                name: "doctor_note.jpg"
            }
        },
        {
            id: "task-6",
            content: "Salary raise request: Lisa Wong",
            role: "user",
            details: {
                question: "What do you think about the salary raise request submitted by Lisa Wong?",
                status: "Approved",
                reason: "Lisa has demonstrated exceptional leadership in the last year, successfully launching two major projects ahead of schedule. The 15% increase is justified by her expanded responsibilities and the critical role she plays in client retention."
            },
            attachment: {
                type: "pdf",
                name: "leadership_assessment.pdf"
            }
        },
        {
            id: "task-7",
            content: "Training budget request: Engineering Team",
            role: "user",
            details: {
                question: "The Engineering Team has requested an increased training budget for Q3. Should we approve?",
                status: "Approved with modifications",
                reason: "The requested training aligns with our strategic goals and will address skill gaps. Recommend approving 75% of the requested amount now, with the remainder contingent on demonstrating application of new skills to current projects."
            }
        }
    ];
    
    const handleTaskClick = (task: any) => {
        // Create a comprehensive message with question, status, and reasoning
        const fullTaskMessage: message = {
            id: crypto.randomUUID(),
            role: "user",
            content: task.details.question
        };
        
        let responseContent = `**Status: ${task.details.status}**\n\n${task.details.reason}`;
        
        // Add attachment information if present
        if (task.attachment) {
            responseContent += `\n\n**Attachment:** ${task.attachment.name}`;
        }
        
        const responseMessage: message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: responseContent
        };
        
        // Set both the question and the response
        setMessages([fullTaskMessage, responseMessage]);
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            const newMessage: message = {
                id: crypto.randomUUID(),
                role: "user",
                content: inputText
            };
            setMessages(prev => [...prev, newMessage]);
            setInputText("");
        }
    };
    
    const handleFileUpload = (type: string) => {
        // This would normally trigger a file input, but we'll simulate it
        alert(`Upload a ${type} file`);
        // In a real implementation, you would trigger a hidden file input here
    };
    
    // Helper function to render the appropriate icon based on attachment type
    const renderAttachmentIcon = (type: string) => {
        switch (type) {
            case 'pdf':
                return (
                    <svg className="w-4 h-4 ml-2 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                );
            case 'voice':
                return (
                    <svg className="w-4 h-4 ml-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                    </svg>
                );
            case 'image':
                return (
                    <svg className="w-4 h-4 ml-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                );
            default:
                return null;
        }
    };
    
    return (
        <div className="flex flex-col h-screen">
            {/* HR Tasks list */}
            <div className="w-64 bg-gray-800 text-white p-4 flex-grow overflow-y-auto">
                <h2 className="text-lg font-bold mb-4">HR Tasks</h2>
                <ul>
                    {hrTasks.map((task: any, index: Key) => (
                        <li key={task.id}>
                            <div 
                                className="cursor-pointer hover:bg-gray-700 p-2 text-sm flex items-center"
                                onClick={() => handleTaskClick(task)}
                            >
                                <span>{task.content}</span>
                                {task.attachment && renderAttachmentIcon(task.attachment.type)}
                            </div>
                            {/* Add divider line except for the last item */}
                            {index !== hrTasks.length - 1 && (
                                <div className="border-t border-gray-600 mt-2 mb-2"></div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Input area with upload button */}
            <div className="w-64 bg-gray-800 p-4 border-t border-gray-700">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            className="w-full bg-gray-700 text-white rounded-md px-3 py-2 pr-8"
                            placeholder="Type a message..."
                        />
                        <div className="absolute right-2 top-2">
                            <div className="relative group">
                                <button 
                                    type="button" 
                                    className="text-gray-300 hover:text-white focus:outline-none"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                    </svg>
                                </button>
                                
                                {/* Upload options popup */}
                                <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block bg-gray-700 rounded-md shadow-lg p-2 w-32">
                                    <button 
                                        type="button" 
                                        onClick={() => handleFileUpload('image')}
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-full text-left p-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                        </svg>
                                        Photo
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => handleFileUpload('document')}
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-full text-left p-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                        </svg>
                                        Document
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => handleFileUpload('voice')}
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white w-full text-left p-1"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                                        </svg>
                                        Voice
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}