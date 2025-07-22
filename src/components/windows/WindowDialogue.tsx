



  
  export function WindowDialogue({ children }: { children: React.ReactNode }) {

  

    return (
      <div
        className={`fixed inset-0 flex flex-col justify-center items-center z-10  bg-black/20
          `}
      >
          {children}
        </div>
    );
  }