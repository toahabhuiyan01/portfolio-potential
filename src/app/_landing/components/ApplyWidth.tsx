function ApplyWidth({ id, children, className }: { children: React.ReactNode, className?: string, id?: string }) {
    return (
        <section
            id={id}
            className={className}
            style={{
                width: "1420px",
                maxWidth: "100%",
            }}
        >
            {children}
        </section>
    ) 
}

export default ApplyWidth