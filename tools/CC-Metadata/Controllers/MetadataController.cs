using Microsoft.AspNetCore.Mvc;

namespace CarbonCall.Metadata.Controllers;

[ApiController]
[Route("[controller]")]
public class MetadataController:ControllerBase
{
    private readonly ILogger<MetadataController> _logger;

    public MetadataController(ILogger<MetadataController> logger)
    {
        _logger = logger;
    }
    
    [HttpGet("getReport")]
    public SustainabilityReport GetReport()
    {
        _logger.Log(LogLevel.Information, "GetReport called");
        return EntityTools.GetReport();
    }

    [HttpGet("getMetadata")]
    public Metadata GetMetadata(string grid)
    {
        _logger.Log(LogLevel.Information, "GetMetadata called");
        var retVal = EntityTools.GetMetadata();
        retVal.GRID = grid;
        return retVal;
    }
}