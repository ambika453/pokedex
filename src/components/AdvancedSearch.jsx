import React from 'react'

const AdvancedSearch = ({ register, handleSubmit, advancedSearch, handleAdvancedSearch, handleAdvancedSearchForm }) => {
  return (
    <div className='px-4 text-center rounded-xl shadow-card hover:shadow-cardhover card'>
        <div onClick={handleAdvancedSearch}>
          <div className='py-3 text-sm text-center text-[#bfdbf7]'>{advancedSearch ? 'Hide' : 'Show'} Advanced Search</div>
        </div>
    { advancedSearch && (
        <div className='pb-4 text-sm text-[#bfdbf7]'>
          <form onSubmit={handleSubmit(handleAdvancedSearchForm)}>
            <div className='flex flex-row'>
                <div className='border border-[#bfdbf7] mb-2' value="type">
                    <div className='p-1 font-medium text-center border-b border-b-[#bfdbf7]'>Type</div>
                    <div className='grid grid-cols-5 gap-4 content-around px-4 py-3' value="types">
                        <div><input type='checkbox' value='normal' {...register('type')}/><label> Normal</label></div>
                        <div><input type='checkbox' value='fire'  {...register('type')}/><label> Fire</label></div>
                        <div><input type='checkbox' value='water' {...register('type')}/><label> Water</label></div>
                        <div><input type='checkbox' value='grass'  {...register('type')}/><label> Grass</label></div>
                        <div><input type='checkbox' value='electric' {...register('type')}/><label> Electric</label></div>
                        <div><input type='checkbox' value='ice'  {...register('type')}/><label> Ice</label></div>
                        <div><input type='checkbox' value='fighting'  {...register('type')}/><label> Fighting</label></div>
                        <div><input type='checkbox' value='poison'  {...register('type')}/><label> Poison</label></div>
                        <div><input type='checkbox' value='ground' {...register('type')}/><label> Ground</label></div>
                        <div><input type='checkbox' value='flying' {...register('type')}/><label> Flying</label></div>
                        <div><input type='checkbox' value='psychic' {...register('type')}/><label> Psychic</label></div>
                        <div><input type='checkbox' value='bug' {...register('type')}/><label> Bug</label></div>
                        <div><input type='checkbox' value='rock' {...register('type')}/><label> Rock</label></div>
                        <div><input type='checkbox' value='ghost' {...register('type')}/><label> Ghost</label></div>
                        <div><input type='checkbox' value='dragon' {...register('type')}/><label> Dragon</label></div>
                        <div><input type='checkbox' value='dark' {...register('type')}/><label> Dark</label></div>
                        <div><input type='checkbox' value='steel' {...register('type')}/><label> Steel</label></div>
                        <div><input type='checkbox' value='fairy' {...register('type')}/><label> Fairy</label></div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-row mb-2' value='below-type'>
                    <div className='w-full border border-[#bfdbf7]' value='ability'>
                        <div className='text-center font-medium p-1 border-b border-b-[#bfdbf7]'>Ability</div>
                        <div className=''>
                            <select className='bg bg-[#021627] w-full pl-3 py-1' defaultValue="0" {...register('ability')}>
                                <option value="0">All</option>
                                <option value="1">
                                    Adaptability
                                </option><option value="2">
                                    Aerilate
                                </option><option value="3">
                                    Aftermath
                                </option><option value="4">
                                    Air Lock
                                </option><option value="5">
                                    Anger Point
                                </option><option value="6">
                                    Anticipation
                                </option><option value="7">
                                    Arena Trap
                                </option><option value="8">
                                    Aura Break
                                </option><option value="9">
                                    Bad Dreams
                                </option><option value="10">
                                    Battery
                                </option><option value="11">
                                    Battle Armor
                                </option><option value="12">
                                    Beast Boost
                                </option><option value="13">
                                    Berserk
                                </option><option value="14">
                                    Big Pecks
                                </option><option value="15">
                                    Blaze
                                </option><option value="16">
                                    Bulletproof
                                </option><option value="17">
                                    Cheek Pouch
                                </option><option value="18">
                                    Chlorophyll
                                </option><option value="19">
                                    Clear Body
                                </option><option value="20">
                                    Cloud Nine
                                </option><option value="21">
                                    Color Change
                                </option><option value="22">
                                    Comatose
                                </option><option value="23">
                                    Competitive
                                </option><option value="24">
                                    Compound Eyes
                                </option><option value="25">
                                    Contrary
                                </option><option value="26">
                                    Corrosion
                                </option><option value="27">
                                    Cursed Body
                                </option><option value="28">
                                    Cute Charm
                                </option><option value="29">
                                    Damp
                                </option><option value="30">
                                    Dancer
                                </option><option value="31">
                                    Dark Aura
                                </option><option value="32">
                                    Dazzling
                                </option><option value="33">
                                    Defeatist
                                </option><option value="34">
                                    Defiant
                                </option><option value="35">
                                    Delta Stream
                                </option><option value="36">
                                    Desolate Land
                                </option><option value="37">
                                    Disguise
                                </option><option value="38">
                                    Download
                                </option><option value="39">
                                    Drizzle
                                </option><option value="40">
                                    Drought
                                </option><option value="41">
                                    Dry Skin
                                </option><option value="42">
                                    Early Bird
                                </option><option value="43">
                                    Effect Spore
                                </option><option value="44">
                                    Electric Surge
                                </option><option value="45">
                                    Emergency Exit
                                </option><option value="46">
                                    Fairy Aura
                                </option><option value="47">
                                    Filter
                                </option><option value="48">
                                    Flame Body
                                </option><option value="49">
                                    Flash Fire
                                </option><option value="50">
                                    Flower Gift
                                </option><option value="51">
                                    Flower Veil
                                </option><option value="52">
                                    Fluffy
                                </option><option value="53">
                                    Forecast
                                </option><option value="54">
                                    Forewarn
                                </option><option value="55">
                                    Friend Guard
                                </option><option value="56">
                                    Frisk
                                </option><option value="57">
                                    Full Metal Body
                                </option><option value="58">
                                    Fur Coat
                                </option><option value="59">
                                    Gluttony
                                </option><option value="60">
                                    Grassy Surge
                                </option><option value="61">
                                    Guts
                                </option><option value="62">
                                    Healer
                                </option><option value="63">
                                    Heatproof
                                </option><option value="64">
                                    Heavy Metal
                                </option><option value="65">
                                    Honey Gather
                                </option><option value="66">
                                    Huge Power
                                </option><option value="67">
                                    Hustle
                                </option><option value="68">
                                    Hydration
                                </option><option value="69">
                                    Hyper Cutter
                                </option><option value="70">
                                    Ice Body
                                </option><option value="71">
                                    Illuminate
                                </option><option value="72">
                                    Illusion
                                </option><option value="73">
                                    Immunity
                                </option><option value="74">
                                    Infiltrator
                                </option><option value="75">
                                    Innards Out
                                </option><option value="76">
                                    Inner Focus
                                </option><option value="77">
                                    Insomnia
                                </option><option value="78">
                                    Intimidate
                                </option><option value="79">
                                    Iron Barbs
                                </option><option value="80">
                                    Iron Fist
                                </option><option value="81">
                                    Justified
                                </option><option value="82">
                                    Keen Eye
                                </option><option value="83">
                                    Klutz
                                </option><option value="84">
                                    Leaf Guard
                                </option><option value="85">
                                    Levitate
                                </option><option value="86">
                                    Light Metal
                                </option><option value="87">
                                    Lightning Rod
                                </option><option value="88">
                                    Limber
                                </option><option value="89">
                                    Liquid Ooze
                                </option><option value="90">
                                    Magic Bounce
                                </option><option value="91">
                                    Magic Guard
                                </option><option value="92">
                                    Magician
                                </option><option value="93">
                                    Magma Armor
                                </option><option value="94">
                                    Magnet Pull
                                </option><option value="95">
                                    Marvel Scale
                                </option><option value="96">
                                    Mega Launcher
                                </option><option value="97">
                                    Merciless
                                </option><option value="98">
                                    Minus
                                </option><option value="99">
                                    Misty Surge
                                </option><option value="100">
                                    Mold Breaker
                                </option><option value="101">
                                    Motor Drive
                                </option><option value="102">
                                    Moxie
                                </option><option value="103">
                                    Multitype
                                </option><option value="104">
                                    Mummy
                                </option><option value="105">
                                    Natural Cure
                                </option><option value="106">
                                    Neuroforce
                                </option><option value="107">
                                    No Guard
                                </option><option value="108">
                                    Normalize
                                </option><option value="109">
                                    Oblivious
                                </option><option value="110">
                                    Overcoat
                                </option><option value="111">
                                    Overgrow
                                </option><option value="112">
                                    Own Tempo
                                </option><option value="113">
                                    Parental Bond
                                </option><option value="114">
                                    Pickup
                                </option><option value="115">
                                    Pixilate
                                </option><option value="116">
                                    Plus
                                </option><option value="117">
                                    Poison Heal
                                </option><option value="118">
                                    Poison Point
                                </option><option value="119">
                                    Poison Touch
                                </option><option value="120">
                                    Power Construct
                                </option><option value="121">
                                    Prankster
                                </option><option value="122">
                                    Pressure
                                </option><option value="123">
                                    Primordial Sea
                                </option><option value="124">
                                    Prism Armor
                                </option><option value="125">
                                    Psychic Surge
                                </option><option value="126">
                                    Pure Power
                                </option><option value="127">
                                    Queenly Majesty
                                </option><option value="128">
                                    Quick Feet
                                </option><option value="129">
                                    Rain Dish
                                </option><option value="130">
                                    Rattled
                                </option><option value="131">
                                    Receiver
                                </option><option value="132">
                                    Reckless
                                </option><option value="133">
                                    Refrigerate
                                </option><option value="134">
                                    Regenerator
                                </option><option value="135">
                                    Rivalry
                                </option><option value="136">
                                    RKS System
                                </option><option value="137">
                                    Rock Head
                                </option><option value="138">
                                    Rough Skin
                                </option><option value="139">
                                    Run Away
                                </option><option value="140">
                                    Sand Force
                                </option><option value="141">
                                    Sand Rush
                                </option><option value="142">
                                    Sand Stream
                                </option><option value="143">
                                    Sand Veil
                                </option><option value="144">
                                    Sap Sipper
                                </option><option value="145">
                                    Schooling
                                </option><option value="146">
                                    Scrappy
                                </option><option value="147">
                                    Serene Grace
                                </option><option value="148">
                                    Shadow Shield
                                </option><option value="149">
                                    Shadow Tag
                                </option><option value="150">
                                    Shed Skin
                                </option><option value="151">
                                    Sheer Force
                                </option><option value="152">
                                    Shell Armor
                                </option><option value="153">
                                    Shield Dust
                                </option><option value="154">
                                    Shields Down
                                </option><option value="155">
                                    Simple
                                </option><option value="156">
                                    Skill Link
                                </option><option value="157">
                                    Slow Start
                                </option><option value="158">
                                    Slush Rush
                                </option><option value="159">
                                    Sniper
                                </option><option value="160">
                                    Snow Cloak
                                </option><option value="161">
                                    Snow Warning
                                </option><option value="162">
                                    Solar Power
                                </option><option value="163">
                                    Solid Rock
                                </option><option value="164">
                                    Soul-Heart
                                </option><option value="165">
                                    Soundproof
                                </option><option value="166">
                                    Speed Boost
                                </option><option value="167">
                                    Stakeout
                                </option><option value="168">
                                    Stall
                                </option><option value="169">
                                    Stamina
                                </option><option value="170">
                                    Stance Change
                                </option><option value="171">
                                    Static
                                </option><option value="172">
                                    Steadfast
                                </option><option value="173">
                                    Steelworker
                                </option><option value="174">
                                    Stench
                                </option><option value="175">
                                    Sticky Hold
                                </option><option value="176">
                                    Storm Drain
                                </option><option value="177">
                                    Strong Jaw
                                </option><option value="178">
                                    Sturdy
                                </option><option value="179">
                                    Suction Cups
                                </option><option value="180">
                                    Super Luck
                                </option><option value="181">
                                    Surge Surfer
                                </option><option value="182">
                                    Swarm
                                </option><option value="183">
                                    Sweet Veil
                                </option><option value="184">
                                    Swift Swim
                                </option><option value="185">
                                    Synchronize
                                </option><option value="186">
                                    Tangled Feet
                                </option><option value="187">
                                    Tangling Hair
                                </option><option value="188">
                                    Technician
                                </option><option value="189">
                                    Telepathy
                                </option><option value="190">
                                    Teravolt
                                </option><option value="191">
                                    Thick Fat
                                </option><option value="192">
                                    Tinted Lens
                                </option><option value="193">
                                    Torrent
                                </option><option value="194">
                                    Tough Claws
                                </option><option value="195">
                                    Trace
                                </option><option value="196">
                                    Triage
                                </option><option value="197">
                                    Truant
                                </option><option value="198">
                                    Turboblaze
                                </option><option value="199">
                                    Unaware
                                </option><option value="200">
                                    Unburden
                                </option><option value="201">
                                    Unnerve
                                </option><option value="202">
                                    Victory Star
                                </option><option value="203">
                                    Vital Spirit
                                </option><option value="204">
                                    Volt Absorb
                                </option><option value="205">
                                    Water Absorb
                                </option><option value="206">
                                    Water Bubble
                                </option><option value="207">
                                    Water Compaction
                                </option><option value="208">
                                    Water Veil
                                </option><option value="209">
                                    Weak Armor
                                </option><option value="210">
                                    White Smoke
                                </option><option value="211">
                                    Wimp Out
                                </option><option value="212">
                                    Wonder Guard
                                </option><option value="213">
                                    Wonder Skin
                                </option><option value="214">
                                    Ball Fetch
                                </option><option value="215">
                                    Screen Cleaner
                                </option><option value="216">
                                    Steam Engine
                                </option><option value="217">
                                    Gorilla Tactics
                                </option><option value="218">
                                    Intrepid Sword
                                </option><option value="219">
                                    Dauntless Shield
                                </option><option value="220">
                                    Cotton Down
                                </option><option value="221">
                                    Gulp Missile
                                </option><option value="222">
                                    Punk Rock
                                </option><option value="223">
                                    Sand Spit
                                </option><option value="224">
                                    Ripen
                                </option><option value="225">
                                    Ice Face
                                </option><option value="226">
                                    Power Spot
                                </option><option value="227">
                                    Mimicry
                                </option><option value="228">
                                    Neutralizing Gas
                                </option><option value="229">
                                    Pastel Veil
                                </option><option value="230">
                                    Hunger Switch
                                </option><option value="231">
                                    Wandering Spirit
                                </option><option value="232">
                                    Unseen Fist
                                </option><option value="233">
                                    Transistor
                                </option><option value="234">
                                    Dragon's Maw
                                </option><option value="235">
                                    Chilling Neigh
                                </option><option value="236">
                                    Grim Neigh
                                </option><option value="237">
                                    As One
                                </option><option value="238">
                                    Quick Draw
                                </option><option value="239">
                                    Curious Medicine
                                </option><option value="240">
                                    Lingering Aroma
                                </option><option value="241">
                                    Aroma Veil
                                </option><option value="242">
                                    Opportunist
                                </option><option value="243">
                                    Cud Chew
                                </option><option value="244">
                                    Gooey
                                </option><option value="245">
                                    Zero to Hero
                                </option><option value="246">
                                    Seed Sower
                                </option><option value="247">
                                    Electromorphosis
                                </option><option value="248">
                                    Earth Eater
                                </option><option value="249">
                                    Thermal Exchange
                                </option><option value="250">
                                    Commander
                                </option><option value="251">
                                    Wind Power
                                </option><option value="252">
                                    Anger Shell
                                </option><option value="253">
                                    Purifying Salt
                                </option><option value="254">
                                    Toxic Debris
                                </option><option value="255">
                                    Well-Baked Body
                                </option><option value="256">
                                    Wind Rider
                                </option><option value="257">
                                    Good as Gold
                                </option><option value="258">
                                    Protosynthesis
                                </option><option value="259">
                                    Quark Drive
                                </option><option value="260">
                                    Vessel of Ruin
                                </option><option value="261">
                                    Sword of Ruin
                                </option><option value="262">
                                    Tablets of Ruin
                                </option><option value="263">
                                    Beads of Ruin
                                </option><option value="264">
                                    Orichalcum Pulse
                                </option><option value="265">
                                    Hadron Engine
                                </option><option value="266">
                                    Mycelium Might
                                </option><option value="267">
                                    Sharpness
                                </option><option value="268">
                                    Armor Tail
                                </option><option value="269">
                                    Pickpocket
                                </option><option value="270">
                                    Guard Dog
                                </option><option value="271">
                                    Supreme Overlord
                                </option>
                        </select>
                    </div>
                </div>
                <div className='w-full ml-2 border border-[#bfdbf7]' value='number range'>
                    <div className='p-1 text-center font-medium border-b border-b-[#bfdbf7]' >Number</div>
                    <div className='py-1'>
                        <input type='number' className='text-center bg bg-[#021627]' defaultValue={1} min={1} max={1010} {...register('start')}/>
                        <span className=''> - </span>
                        <input type='number' className='text-center bg bg-[#021627]' defaultValue={1010} min={1} max={1010} {...register('end')}/>
                    </div>
                </div>
            </div>
            <div className='border border-[#bfdbf7] mb-2' value="Area">
                <div className='p-1 text-center font-medium border-b border-b-[#bfdbf7]'>Area</div>
                <div className='grid grid-cols-5 gap-2 content-around py-3 px-4'>
                    <div><input type='checkbox' value={[2,26]} {...register('region')}/><label> Kanto</label></div>
                    <div><input type='checkbox' value={[3,7]} {...register('region')}/><label> Johto</label></div>
                    <div><input type='checkbox' value={[4,15]} {...register('region')}/><label> Hoenn</label></div>
                    <div><input type='checkbox' value={[5,6]} {...register('region')}/><label> Sinnoh</label></div>
                    <div><input type='checkbox' value={[8,9]} {...register('region')}/><label> Unova</label></div>
                    <div><input type='checkbox' value={[12,13,14]} {...register('region')}/><label> Kalos</label></div>
                    <div><input type='checkbox' value={[16,17,18,19,20,21,22,23,24,25]} {...register('region')}/><label> Alola</label></div>
                    <div><input type='checkbox' value={[27,28,29]} {...register('region')}/><label> Galar</label></div>
                    <div><input type='checkbox' value={[30]} {...register('region')}/><label> Hisui</label></div>
                    <div><input type='checkbox' value={[31]} {...register('region')}/><label> Paldia</label></div>
                </div>
            </div>
            <div className='flex flex-row font-medium ' value='buttons'>
                <div className='py-1 w-full text-center border border-[#bfdbf7] mr-1'>
                    <button type='reset'>Reset</button>
                </div>
                <div className='py-1 w-full text-center border border-[#bfdbf7] ml-1'>
                    <button type='submit'>Search</button>
                </div>
            </div>
          </form>
        </div>)
    }
    </div>
  )
}

export default AdvancedSearch