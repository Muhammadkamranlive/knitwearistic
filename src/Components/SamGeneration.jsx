import React, { useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { array1 } from './DataSet';
function SamGeneration()
{
    const [operation, setOperation] = useState([
        
        {
            Sequence_No:1,
            Operation:"Front Press",
            Machine_type:"Manual",
            Rate:7,
            Attachment:"",
            Smv:0.25,
            garmentStyle:"Pull Over Hood"
        },
        {
            Sequence_No:2,
            Operation:"Back Press",
            Machine_type:"Manual",
            Rate:5,
            Attachment:"",
            Smv:0.20,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:3,
            Operation:"Back Patch Press",
            Machine_type:"Manual",
            Rate:6,
            Attachment:"",
            Smv:0.30
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:4,
            Operation:"Front Pocket Position Marking",
            Machine_type:"Manual",
            Rate:10,
            Attachment:"",
            Smv:0.30
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:5,
            Operation:"Hood Panel Join (2)",
            Machine_type:"4TH O/L",
            Rate:15,
            Attachment:"",
            Smv:0.55
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:6,
            Operation:"Lining Hood Panel Join (2)",
            Machine_type:"4TH O/L",
            Rate:15,
            Attachment:"",
            Smv:0.55
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:7,
            Operation:"Hood Join Front",
            Machine_type:"4TH O/L",
            Rate:15,
            Attachment:"",
            Smv:0.50
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:8,
            Operation:"Draw Cord Hole With Fusing",
            Machine_type:"B.H",
            Rate:14,
            Attachment:"Gauge",
            Smv:0.40
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:9,
            Operation:"Hood Top Stitch Front",
            Machine_type:"F/L 3T",
            Rate:16,
            Attachment:"",
            Smv:0.40
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:10,
            Operation:"Hood Inner Tack",
            Machine_type:"S.N.L.S",
            Rate:5,
            Attachment:"",
            Smv:0.15
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:11,
            Operation:"Hood Closing",
            Machine_type:"4TH O/L",
            Rate:8,
            Attachment:"",
            Smv:0.30
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:12,
            Operation:"Front Pocket Hem",
            Machine_type:"F/L 3T",
            Rate:12,
            Attachment:"Gauge",
            Smv:0.25
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:13,
            Operation:"Front Pocket Attach With Trim",
            Machine_type:"S.N.L.S",
            Rate:35,
            Attachment:"",
            Smv:0.90
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:14,
            Operation:"Care Label Sew",
            Machine_type:"S.N.L.S",
            Rate:8,
            Attachment:"",
            Smv:0.25
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:15,
            Operation:"Shoulder Attach With Size Label",
            Machine_type:"4TH O/L",
            Rate:12.50,
            Attachment:"",
            Smv:0.35
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:16,
            Operation:"Hood Tack To Body",
            Machine_type:"S.N.L.S",
            Rate:15,
            Attachment:"",
            Smv:0.50
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:17,
            Operation:"Hood Attach",
            Machine_type:"4TH O/L",
            Rate:15,
            Attachment:"",
            Smv:0.35
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:18,
            Operation:"Back Neck Binding ",
            Machine_type:"F/L 2T",
            Rate:13,
            Attachment:"Folder",
            Smv:0.25
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:19,
            Operation:"Back Neck Binding End Tack ",
            Machine_type:"S.N.L.S",
            Rate:9,
            Attachment:"",
            Smv:0.35
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:20,
            Operation:"Back Neck Binding Closing ",
            Machine_type:"S.N.L.S",
            Rate:14,
            Attachment:"",
            Smv:0.45
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:21,
            Operation:"Front Neck Top Stitch ",
            Machine_type:"F/L 3T",
            Rate:12,
            Attachment:"",
            Smv:0.30
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:22,
            Operation:"Back Patch Attach",
            Machine_type:"S.N.L.S",
            Rate:20,
            Attachment:"",
            Smv:0.50
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:23,
            Operation:"HTL Attach To Back Patch",
            Machine_type:"Heat Seal",
            Rate:9,
            Attachment:"",
            Smv:0.25
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:24,
            Operation:"Sleeve Attach",
            Machine_type:"4TH O/L",
            Rate:16,
            Attachment:"",
            Smv:0.60
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:25,
            Operation:"Arm Hole Top Stitch",
            Machine_type:"F/L 3T",
            Rate:15,
            Attachment:"",
            Smv:0.50
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:26,
            Operation:"Side Seam With Label",
            Machine_type:"4TH O/L",
            Rate:20,
            Attachment:"",
            Smv:0.70
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:27,
            Operation:"Cuff Rib Ring Make+Attach With Turn",
            Machine_type:"4TH O/L",
            Rate:23,
            Attachment:"",
            Smv:0.55
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:28,
            Operation:"Bottom Rib Ring Make+Attach",
            Machine_type:"4TH O/L",
            Rate:21,
            Attachment:"",
            Smv:0.60
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:29,
            Operation:"Cuff Top Stitch ",
            Machine_type:"F/L 3T",
            Rate:16,
            Attachment:"",
            Smv:0.40
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:30,
            Operation:"Bottom Rib Top Stitch",
            Machine_type:"F/L 3T",
            Rate:15,
            Attachment:"",
            Smv:0.30
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:31,
            Operation:"Arm Hole Top Stitch",
            Machine_type:"Manual",
            Rate:11,
            Attachment:"",
            Smv:0.30
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:32,
            Operation:"Trimming",
            Machine_type:"",
            Rate:18,
            Attachment:"",
            Smv:0 
            ,
            garmentStyle:"Pull Over Hood"
        },
    {
            Sequence_No:33,
            Operation:"Press",
            Machine_type:"",
            Rate:19,
            Attachment:"",
            Smv:0 
            ,
            garmentStyle:"Pull Over Hood"
        },
       {
            Sequence_No:34,
            Operation:"Rafu",
            Machine_type:" ",
            Rate:3,
            Attachment:"",
            Smv:0
            ,
            garmentStyle:"Pull Over Hood"
        }
        ,
    
    
        //second array
        {
            Sequence_No:1,
            Operation:"Tape Press",
            Machine_type:"Manual",
            Rate:3,
            Attachment:"",
            Smv:0.10,
            garmentStyle:"Sweat Shirt"
        },
        {
            Sequence_No:18,
            Operation:"Back Press",
            Machine_type:"Manual",
            Rate:5,
            Attachment:"",
            Smv:0.20,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:19,
            Operation:"Back Patch Press",
            Machine_type:"Manual",
            Rate:6,
            Attachment:"",
            Smv:0.30,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:20,
            Operation:"Front+Back Bottom Hem Stitch ",
            Machine_type:"F/L 5T",
            Rate:16,
            Attachment:"",
            Smv:0.40,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:2,
            Operation:"Shoulder Attach With Size Label",
            Machine_type:"4TH O/L",
            Rate:13,
            Attachment:"",
            Smv:0.35,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:3,
            Operation:"Shoulder Top Stitch",
            Machine_type:"F/L 2T",
            Rate:10,
            Attachment:"",
            Smv:0.25,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:4,
            Operation:"Neck Rib Ring Making+Attach",
            Machine_type:"4TH O/L",
            Rate:18,
            Attachment:"",
            Smv:0.50,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:5,
            Operation:"Back Neck Tape Attach",
            Machine_type:"S.N.L.S",
            Rate:15,
            Attachment:"",
            Smv:0.40,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:6,
            Operation:"Back Neck Tape Closing",
            Machine_type:"S.N.L.S",
            Rate:19,
            Attachment:"",
            Smv:0.40,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:7,
            Operation:"Front Neck Top Stitch",
            Machine_type:"F/L 2T",
            Rate:12,
            Attachment:"",
            Smv:0.20,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:8,
            Operation:"Sleeve Attach",
            Machine_type:"4TH O/L",
            Rate:16,
            Attachment:"",
            Smv:0.60,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:9,
            Operation:"Arm Hole Top Stitch",
            Machine_type:"F/L 3T",
            Rate:15,
            Attachment:"Gauge",
            Smv:0.50,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:10,
            Operation:"Side Seam With Label",
            Machine_type:"4TH O/L",
            Rate:15,
            Attachment:"",
            Smv:0.60,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:11,
            Operation:"Side Slit O/L",
            Machine_type:"4TH O/L",
            Rate:8,
            Attachment:"",
            Smv:0.30,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:12,
            Operation:"Side Slit Tack",
            Machine_type:"S.N.L.S",
            Rate:10,
            Attachment:"",
            Smv:0.40,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:13,
            Operation:"Side Slit Top Stitch",
            Machine_type:"S.N.L.S",
            Rate:21,
            Attachment:"",
            Smv:0.60,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:14,
            Operation:"Sleeve Hem",
            Machine_type:"F/L 5T",
            Rate:12,
            Attachment:"Gauge",
            Smv:0.40,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:15,
            Operation:"Care Label Sew",
            Machine_type:"S.N.L.S",
            Rate:6,
            Attachment:"",
            Smv:0.25,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:21,
            Operation:"Back Patch Attach",
            Machine_type:"S.N.L.S",
            Rate:20,
            Attachment:"",
            Smv:0.50,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:22,
            Operation:"HTL Attach To Back Patch",
            Machine_type:"Heat Seal",
            Rate:10,
            Attachment:"",
            Smv:0.25,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:23,
            Operation:"Trimming",
            Machine_type:"",
            Rate:15,
            Attachment:"",
            Smv:0,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:24,
            Operation:"Press",
            Machine_type:"",
            Rate:16,
            Attachment:"",
            Smv:0 ,
            garmentStyle:"Sweat Shirt"
        },
    {
            Sequence_No:25,
            Operation:"Rafu",
            Machine_type:"",
            Rate:3,
            Attachment:"",
            Smv:0 ,
            garmentStyle:"Sweat Shirt"
        },
    
    ]);

    
    const [product, setProduct] = useState('');
    const [loading, setLoading] = useState(false);
    const [style,setStyle]=useState('Pull Over Hood')
    var valueOfTargetPerDay=0.0;var valueofTotalRate=0.0;
           if(style==="Pull Over Hood"){
               valueOfTargetPerDay=24
               valueofTotalRate=24;
           }
           else{
               valueOfTargetPerDay=14;
               valueofTotalRate=18-0.50;
           }

    var MachineRequired = 0.0;
    var count = 0;
           var TotalMachineRequired=0.0; 
           var TPH=0.0;
           var totalSmv=0.0;
           var TotalTargetPerDay=0.0;
           var totalRate=0.0;
           var GrandTotal=0.0;
           var GrandTotalMachineRequired=0.0;
           var GrandTotalManuals=0;
           var GranTotalMachineOperators=1;
           var MachineNameManual="Manual";
           var ManualSMV=0;
           var MachineNameSNLS="S.N.L.S";
           var totalSNLS=0.0;
           var MachineSNLSMV=0;
           var MachineNameSNLSET="S.N.L.S .E.T";
           var totalSNLSET=0;
           var MachineSMVSNSET=0;
           var MachineNameDNLS="D.N.L.S";
           var totalDNLS=0;
           var MachineSMVDNLS=0;
           var MachineNameSNCS="S.N.C.S";
           var totalSNCS=0;
           var MachineSMVSNCS=0;
           var MachineNameFOA="F.O.A";
           var totalFOA=0;
           var MachineSMVFOA=0;
           var MachineNameOL="O/L";
           var totalOL=0;
           var MachineSMVOL=0;
           var MachineName3TH_O_L="3TH O/L";
           var total3TH_O_L=0;
           var MachineSMV3THOL=0;
           var MachineNaame4TH_O_L="4TH O/L";
           var total4thOL=0;
           var MachineSMV4THOL=0;
           var MachineNameBT="B.T";
           var totalBT=0;
           var MachineSMVBT=0;
           var MachineNameBH="B.H";
           var totalBH=0;
           var MachineSMVBH=0;
           var MachineNameBF="B.F";
           var totalBF=0;
           var MachineSMVBF=0;
           var MachineName4NCS="4.N.C.S";
           var total4NCS=0;
           var MachineSMV4NCS=0;
           var MachineNameMN="M/N";
           var totalMN=0;
           var MachineSMVMN=0;
           var MachineNameFL2T="F/L 2T";
           var totalFL2T=0;
           var MachineSMVFL2T=0;
           var MachineNameFL3T="F/L 3T";
           var totalFL3T=0;
           var MachineSMVFL3T=0;
           var MachineNameFL4T="F/L 4T";
           var totalFL4T=0;
           var MachineSMVFL4T=0;
           var MachineNameFL5T="F/L 5T";
           var totalFL5T=0;
           var MachineSMVFL5T=0;
           var MachineNameFL6T="F/L 6T";
           var totalFL6T=0;
           var MachineSMVFL6T=0;
           var MachineNameBS="B.S";
           var totalBS=0;
           var MachineSMVBS=0;
           var MachineNameHeatSeal="Heat Seal";
           var totalHeatSeal=0;
           var MachineSMVHEATSEAL=0;
           var MachineNameRollCuttingMachine="Roll Cutting Machine";
           var totalRollCuttingMachine=0;
           var MachineSMVCUTTINGRULL=0;
           var  GrandtotalRoundUp=0.0;
           var MachineNamePress="Press";
           var MachineSMVPRESS=0;
           var totalPress=0.0; 
           var extraMachine=[];
           var excounter=0; var counterextra=[]; var finalextra=0;
           var copy= operation.sort((a, b) => (a.Sequence_No > b.Sequence_No) ? 1 : -1)
           operation.map((list=>{
                totalSmv=parseFloat(list.Smv)+totalSmv;
                totalRate=parseFloat(list.Rate)+totalRate;
                if(list.Machine_type!="Manual" && list.Machine_type!=MachineNameSNLS && list.Machine_type!=MachineNameSNLSET && list.Machine_type!=MachineNameDNLS && list.Machine_type!=MachineNameSNCS && list.Machine_type!=MachineNameFOA && list.Machine_type!=MachineNameOL && list.Machine_type!=MachineName3TH_O_L && list.Machine_type!=MachineNaame4TH_O_L && list.Machine_type!=MachineNameBT && list.Machine_type!=MachineNameBH && list.Machine_type!=MachineNameBF && list.Machine_type!=MachineName4NCS && list.Machine_type!=MachineNameMN && list.Machine_type!=MachineNameFL2T && list.Machine_type!=MachineNameFL3T && list.Machine_type!=MachineNameFL4T && list.Machine_type!=MachineNameFL5T && list.Machine_type!=MachineNameFL6T && list.Machine_type!=MachineNameBS && list.Machine_type!=MachineNameHeatSeal && list.Machine_type!=MachineNameRollCuttingMachine && list.Machine_type!=""){
                    extraMachine.push(list.Machine_type);
                    excounter=excounter+1;
                    counterextra.push(list.Sequence_No);

                }
                if(list.Machine_type!="Manual" && list.Machine_type!=MachineNameSNLS && list.Machine_type!=MachineNameSNLSET && list.Machine_type!=MachineNameDNLS && list.Machine_type!=MachineNameSNCS && list.Machine_type!=MachineNameFOA && list.Machine_type!=MachineNameOL && list.Machine_type!=MachineName3TH_O_L && list.Machine_type!=MachineNaame4TH_O_L && list.Machine_type!=MachineNameBT && list.Machine_type!=MachineNameBH && list.Machine_type!=MachineNameBF && list.Machine_type!=MachineName4NCS && list.Machine_type!=MachineNameMN && list.Machine_type!=MachineNameFL2T && list.Machine_type!=MachineNameFL3T && list.Machine_type!=MachineNameFL4T && list.Machine_type!=MachineNameFL5T && list.Machine_type!=MachineNameFL6T && list.Machine_type!=MachineNameBS && list.Machine_type!=MachineNameHeatSeal && list.Machine_type!=MachineNameRollCuttingMachine && list.Machine_type!=""){
                    
                       finalextra=finalextra+1;
                }

                return count+list.Sequence_No

           }))

    

         var roundUp=0;   
            
           TotalTargetPerDay=(valueOfTargetPerDay*480)/totalSmv;

           const data = {
            labels: ['SMV','Rate','Quantiy'],
            
            datasets: [
              {
                label: '# of Votes',
                data: [totalSmv,totalRate+valueofTotalRate,TotalTargetPerDay],
                backgroundColor: [
                 
                  '#ff763b ',
                  '#123597 ',
                  '#fc5286 ',
                  '#5961F9'
                  
                ],
               borderColor:[
                '#ff763b ',
                '#123597 ',
                '#fc5286 ',
                '#5961F9'
               ],
               
                
              },
            ],
            
          };
     
var DashboardComponent;
  return (
    <div>
      
                   
        
    
      
        <div class="container-fluid">

           
                <div class="row mb-5">
                    <div class="col-lg-4">
                       
                                <div class="card ">
                                    <div class="card-header pb-0 d-flex justify-content-between">
                                        <div>
                                            <h4 class="mb-1">Graphical Analysis{product} </h4>
                                            <p>Total: SMV, Total: Rate ,Order Quantity</p>
                                        </div>
                                       
                                    </div>
                                    <Doughnut data={data}
                                    
                                    
                                    />
                                   
                              
                        </div>
                    </div>
                    <div class="col-lg-8 ">
                        <div class="card py-xl-5 " >
                            <div class="card-header py-5">
                                <h5 >Order Overview </h5>
                                <h2 class="mt-4 ">Operation Break Down Output</h2>
                                <div class="mt-4 py-2">
                                    <h4>{(TotalTargetPerDay).toFixed(2)}</h4>
                                    <h6>100% Target Per Day<span class="pull-right">100%</span></h6>
                                    <div class="progress mb-3" style={{height: "7px"}}>
                                        <div class="progress-bar bg-primary" style={{width:"100%"}} role="progressbar"><span class="sr-only">% Order</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4 ">
                                    <h4>{(TotalTargetPerDay*0.8).toFixed(2)}</h4>
                                    <h6 class="m-t-10 ">80% Target Per Day<span class="pull-right">80%</span></h6>
                                    <div class="progress mb-3" style={{height: "7px"}}>
                                        <div class="progress-bar bg-success" style={{width: "80%"}} role="progressbar"><span class="sr-only">50% Order</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <h4>{
                                    ((TotalTargetPerDay*0.8)/8).toFixed(2)}</h4>
                                    <h6 class="m-t-10 ">80% Target Per Hour<span class="pull-right">80%</span></h6>
                                    <div class="progress mb-3" style={{height: "7px"}}>
                                        <div class="progress-bar bg-warning" style={{width: "80%"}} role="progressbar"><span class="sr-only">20% Order</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
               
                    
                </div>
                <div className="row mb-5">
                <div class="col-lg-12  ">
                        <div class="card">
                            <div class="card-header">
                             
                                <div class="active-member">
                                <h3 className="text-left">Order Details with SAM Calculation</h3>
                                    <div class="table-responsive">
                                        <table class="table table-xs mb-0 header-border table-hover verticle-middle">
                                            <thead>
                                                <tr>
                                                    <th>SQ<br/>No#</th>
                                                    <th>Operation</th>
                                                    <th>M/C Type</th>
                                                    <th>Rate</th>
                                                    <th>Attachment</th>
                                                    <th>S.M.V</th>
                                                    <th>TGT<br/> P/H</th>
                                                    <th>MC<br/>Required</th>
                                                    <th>Round<br/>Up</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                             
                                            copy.map(list=>
                                            <tr>
                                               
                                            <td>{ list.Sequence_No}</td>
                                            <td>
                                               
                                                <div class="d-flex text-center" id="mybox">
                                                    <div class=''><span class=" text-primary"></span></div>
                                                      <div class="mt-2 ml-3">{list.Operation}</div>
                                                </div>
                                               
                                            </td>
                        
                                            <td><span>{list.Machine_type}</span></td>
                       
                                            <td>
                                                <span>{list.Rate}</span>
                                            </td>
                                            <td>
                                             <span>{list.Attachment} </span>  
                                            </td>
                                               <td>
                                                   <span class=" badge bg-primary">{list.Smv}</span></td>
                                               <td>{TPH=60/(parseFloat(list.Smv))
                                                 
                                                    
                                               }</td>
                                               <td>{
                                               
                                               MachineRequired=(parseFloat(list.Smv)*TotalTargetPerDay)/480
                                              
                                              
                                                
                                                  
                                               }
                                                <span className="d-none">
                                                {
                                               
                                               
                                              
                                               GrandTotalMachineRequired= (MachineRequired=(parseFloat(list.Smv)*TotalTargetPerDay)/480)+GrandTotalMachineRequired
                                               
                                                
                                                  
                                               }
                                                </span>
                                               
                                               </td>
                                               <td>
                                                <span className="  badge bg-primary">
                                                  
                                                   
                                                </span>
                                               
                                               
                                              
                                               </td>
                                        </tr>
                                      
                                        )
                                    }
                                               
                                               
                                              
                                            </tbody>
                                        </table>
                                    </div>
                               
                                </div>
                            </div>
                        </div>                        
                    </div>

                </div>
                
              
              
                <div class="row mb-5">
                    <div class="col-lg-12 ">
                        <div class="card">
                            <div class="card-header">
                                <div class="active-member">
                                    <div className="text-left">
                                        <h3>Order Total Sammary</h3>
                                    </div>
                                      


                                    <div class="table-responsive ">
                                        <table class="table  mb-0">
                                            <thead>
                                           
                                                <tr className="font-weight-bold">

                                                    <th>Grand Total of SMV</th>
                                                    <th>Total Rate</th>
                                                    <th>Grand Total Rate</th>
                                                    <th>Total Machine Required</th>
                                                    <th>Grand Total Manuals</th>
                                                    <th>Total Press Operators</th>
                                                    <th>Total Machine Operators</th>
                                                    
                                                    <th>Total Round Up</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                              <tr>

                                                    <td>
                                                  
                                                      <div class="mt-2 ml-3  badge bg-gradient gradient-6 text-white">
                                                          {totalSmv.toFixed(2)}
                                                          </div>
                                                
                                                        
                                                        </td>
                                                    <td>
                                                        <span className="badge gradient-7 bg-success">
                                                        {totalRate=totalRate+valueofTotalRate
                                                        
                                                        }

                                                        </span>
                                                    
                                                    </td>
                                                    <td>
                                                        <span className="label badge bg-secondary text-white">{GrandTotal=totalRate/12
         
                                                        }</span>
                                                    </td>
                                                    <td>
                                                       <span className=" badge bg-danger">
                                                           {GrandTotalMachineRequired.toFixed(2)} 
                                                        </span> 
                                                    </td>
                                                    <td>
                                                      <span className=" badge bg-dark">
                                                        {GrandTotalManuals}  
                                                        </span>    
                                                    </td>
                                                    <td>
                                                       <span className="label badge bg-gradient">
                                                            {totalPress}
                                                       </span>
                                                    </td>
                                                    <td>
                                                        {totalSNLS+totalSNCS+totalRollCuttingMachine+totalSNLSET+totalBF+totalBS+totalBT+totalBH+totalFL2T+totalFL3T+totalFL5T+totalFL6T+totalFL4T+totalHeatSeal+totalMN+total3TH_O_L+total4thOL+totalOL+totalFOA+totalDNLS}
                                                    </td>
                                                    <td>
                                                        <span className="badge graident-9">
                                                            {GrandtotalRoundUp}
                                                        </span>
                                                    </td>
                                           </tr>
                                       </tbody>
                                       </table>
                                 </div>
                               
                               
                               
                               </div>
                             </div>         
                        </div>                        
                    </div>
               

             
                   
                </div>

              
              
             
                <div className="row">
                    <div class="col-lg-12">
                        <div class="card d-block d-sm-block d-md-none d-lg-none">
                            <div class="card-body">
                                <h3>Order Total Sammary</h3>
                                <div class="active-member">
                                    <div class="table-responsive">
                                        <table class="table  mb-0 table-hover ">
                                            <thead>
                                           
                                                <tr>
                                                    
                                                    <th>OutPut Result</th>
                                                    
                                                    <th>Total Value</th>
                                                      
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Grand Total of SMV</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                    <div class="mt-2 ml-3 label badge gradient-6 text-white">
                                                          {totalSmv}
                                                          </div>
                                                       
                                                    </td>
                                            
                                                      
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Total Rate</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                    <span className="label badge gradient-7">
                                                        {totalRate=totalRate+valueofTotalRate
                                                        
                                                        }

                                                        </span>
                                                       
                                                    </td>
                                            
                                                     
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Grand Total Rate</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                    <span className="label badge gradient-11 text-white">{GrandTotal=totalRate/12
                                    
                                                        }</span>
                                                       
                                                    </td>
                                            
                                                     
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-4"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Total Machine Required</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                    <span className="label gradient-5 badge">
                                                           {GrandTotalMachineRequired.toFixed(2)} 
                                                        </span> 
                                                       
                                                    </td>
                                            
                                                     
                                                      
                                                </tr>

                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Grand Total Manuals</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                    <span className="label badge gradient-5">
                                                        {GrandTotalManuals}  
                                                        </span>  
                                                       
                                                    </td>
                                            
                                                     
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Total Press Operators</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                    <span className="label badge gradient-4">
                                                            {totalPress}
                                                       </span>
                                                       
                                                    </td>
                                            
                                                       
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Total Machine Operators</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span className="label gradient-1">  {(totalSNLS+totalSNCS+totalRollCuttingMachine+totalSNLSET+totalBF+totalBS+totalBT+totalBH+totalFL2T+totalFL3T+totalFL5T+totalFL6T+totalFL4T+totalHeatSeal+totalMN+total3TH_O_L+total4thOL+totalOL+totalFOA+totalDNLS).toFixed(2)}</span>
                                                       
                                                    </td>
                                            
                                                     
                                                      
                                                </tr>
                                               
                                                 <tr>

                                                 <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Grand Total RoundUp</div>
                                                        </div>
                                                       
                                                    </td>
                                                 <span className="label badge gradient-9">
                                                            {GrandtotalRoundUp}
                                                        </span>
                                                 </tr>
                                               
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                   
                   
                    </div>
                
                                    
                </div>

               

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h3>Machine Information Summary</h3>
                                <div class="active-member">
                                    <div class="table-responsive">
                                        <table class="table  mb-0 table-hover ">
                                            <thead>
                                           
                                                <tr>
                                                    
                                                    <th>Machine Name</th>
                                                    <th>Total Machine Quantity</th>
                                                    <th>SMV</th>
                                                      
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">343</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-7 badge">33</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;S.N.L.S .E.T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>33</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-4 badge">33</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;D.N.L.S</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>334</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-2 badge">4443</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-4"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;S.N.C.S</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>444</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-5 badge">3334</span></td>
                                                      
                                                </tr>

                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;F.O.A</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>433</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-7 badge">3443</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;O/L</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-4 badge">433</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;3TH O/L</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3334</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-2 badge">243</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-4"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;4TH O/L</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>334</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-5 badge">43334</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;B.T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>443</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-7 badge">3444</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;B.H</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-4 badge">4444</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;B.F</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>2333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-2 badge">333</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-4"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;4.N.C.S</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>334</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-5 badge">332</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;M/N</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3332</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-7 badge">3332</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;F/L 2T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3332</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-4 badge">3333</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;F/L 3T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-2 badge">3333</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-4"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;F/L 4T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-5 badge">333</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;F/L 5T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>432</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-7 badge">3344</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-2"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;F/L 6T</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>4322</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-4 badge">3322</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;B.S</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>343</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-2 badge">343</span></td>
                                                      
                                                </tr>
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-4"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Heat Seal</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>3333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-5 badge">333</span></td>
                                                      
                                                </tr>

                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;Roll Cutting Machine</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>42233</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-8 badge">3343</span></td>
                                                      
                                                </tr>
                                          
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-calculator"></span></div>
                                                              <div class="mt-2">&nbsp;Total Machine Operators</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>333</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-8 badge">444</span></td>
                                                      
                                                </tr>
                                                
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-calculator"></span></div>
                                                              <div class="mt-2">&nbsp;Total Press Operators</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>424</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-8 badge">4433</span></td>
                                                      
                                                </tr>
                                               
                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-calculator"></span></div>
                                                              <div class="mt-2">&nbsp;Total Manual</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>5555</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-8 badge">433</span></td>
                                                      
                                                </tr>
                                               

                                                <tr>
                                                    
                                                    <td>
                                                        <div class="d-flex text-center">
                                                            <div class="box gradient-1"><span class="fa fa-calculator"></span></div>
                                                              <div class="mt-2">&nbsp;Grand Total</div>
                                                        </div>
                                                       
                                                    </td>

                                                    <td>
                                                        <span>5433</span>
                                                       
                                                    </td>
                                            
                                                       <td><span class="label gradient-8 badge">443</span></td>
                                                      
                                                </tr>
                                               
                                                <tr>
                                                    <td>
                                                    <div class="d-flex text-center">
                                                            <div class="box gradient-3"><span class="fa fa-industry"></span></div>
                                                              <div class="mt-2">&nbsp;
                                                              Extra Machine Names That <br/>
                                                              not included in default list</div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        Machine Name =
                                                      {
                                                          extraMachine.toString()
                                                         
                                                      }<br/>
                                                       Qty =
                                                       {
                                                        excounter
                                                       }
                                                       <br/>
                                                       SQ No# =
                                                       {
                                                         counterextra.toString()
                                                       }
                                                    </td>
                                                    <td>
                                                      <h4> Final Total Machine Operators =</h4>
                                                
                                                    <span>
                                                        {
                                                          style=="Pull Over Hood"?
                                                          <>
                                                           {totalRollCuttingMachine+totalHeatSeal+totalBS+totalFL6T+totalFL5T+totalFL4T+totalFL3T+totalFL2T+totalMN+totalBF+totalBH+totalBT+total4thOL+total3TH_O_L+totalOL+totalFOA+totalSNCS+totalDNLS+totalSNLSET+totalSNLS+finalextra-1}
                                                          </>:
                                                          <>
                                                           {totalRollCuttingMachine+totalHeatSeal+totalBS+totalFL6T+totalFL5T+totalFL4T+totalFL3T+totalFL2T+totalMN+totalBF+totalBH+totalBT+total4thOL+total3TH_O_L+totalOL+totalFOA+totalSNCS+totalDNLS+totalSNLSET+totalSNLS+finalextra}
                                                          </>
                                                        }
                                                        </span>  
                                                    </td>
                                                
                                                </tr>
                                            
                                          
                                            </tbody>
                                        
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                   
                   
                    </div>
                
                
                </div>

               

                

             
            
             

                

              
            </div>
           
         
         
        </div>
   
    

   
    
  )
}

export default SamGeneration