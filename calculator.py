from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pathlib import Path
import operator

app = FastAPI()

# Enable CORS for API requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CalcRequest(BaseModel):
    a: float
    b: float
    operation: str  # +, -, *, /, **, //


@app.post("/api/calc")
async def calculate(request: CalcRequest):
    """Calculate result based on two numbers and an operation."""
    ops = {
        "+": operator.add,
        "-": operator.sub,
        "*": operator.mul,
        "/": operator.truediv,
        "**": operator.pow,
        "//": operator.floordiv,
        "%": operator.mod,
    }
    
    if request.operation not in ops:
        raise HTTPException(
            status_code=400, 
            detail=f"Invalid operation. Allowed: {', '.join(ops.keys())}"
        )
    
    if request.operation == "/" and request.b == 0:
        raise HTTPException(status_code=400, detail="Division by zero")
    
    try:
        result = ops[request.operation](request.a, request.b)
        return {"result": result, "a": request.a, "b": request.b, "operation": request.operation}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


# Mount static files AFTER defining API routes
static_dir = Path(__file__).parent / "static"
if static_dir.exists():
    app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)