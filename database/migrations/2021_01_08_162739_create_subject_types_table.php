<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjectTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subject_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->bigInteger('media_type_id')->unsigned()->nullable();
            $table->enum('tag', [
                'general',
                'roadshow',
            ])->default('general');
            $table->char('status', 1)->default(1);
            $table->foreign('media_type_id')->references('id')->on('media_types')->onDelete('set null')->onUpdate('cascade');
        });

        DB::table('subject_types')->insert([
            ['name' => 'Company Overview', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Product Service Introduction', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Annual Shareholder Meeting', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => '10K Annual Report related Audio', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => '10Q Quarterly Report related Audio', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => '8K Material Event related Audio', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Proxy Statement/ Proxy Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Analyst Day', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Day In The Life of The Company', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Merger/Acquisition Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Company Spinoff', 'media_type_id' => 1, 'tag' => 'general'],

            ['name' => 'Dividend Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Standards Board Approval-Technology', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Government Approval of Product/Service', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Clinical Trial', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'FDA Approval', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'FDA Denial', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Other clinical or regulatory stage/phase', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'In-Person Road Show-Deal Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'In-Person Road Show-Non-Deal Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Virtual Road Show-Deal Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Virtual Road Show-Non-Deal Related', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Analyst Coverage', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Other (NO ADVERTISEMENTS)', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Product Demonstration', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Product Comparison', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Product Review', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Real Estate Development', 'media_type_id' => 1, 'tag' => 'general'],

            ['name' => 'Company Overview', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Product Service Introduction', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Annual Shareholder Meeting', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Annual Report related Video', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Quarterly Report related Video', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Material Event related Video', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Proxy Statement/ Proxy Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Analyst Day', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Day In The Life of The Company', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Merger/Acquisition Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Spinoff', 'media_type_id' => 2, 'tag' => 'general'],

            ['name' => 'Dividend Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Standards Board Approval-Technology', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Government Approval of Product/Service', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Clinical Trial', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'FDA Approval', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'FDA Denial', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Other clinical or regulatory stage/phase', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'In-Person Road Show-Deal Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'In-Person Road Show-Non-Deal Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Virtual Road Show-Deal Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Virtual Road Show-Non-Deal Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Analyst Coverage', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Interview/Q&A - Analyst', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Interview/Q&A - Media', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Interview/Q&A - Industry Trade Show', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Interview/Q&A - CEO', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Interview/Q&A - Executive', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Management Team Change', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Question & Answer', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'All Hands Meeting', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Process Improvement', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Manufacturing Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Analyst Coverage Buy', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Analyst Coverage Sell', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Analyst Coverage Hold', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Regulatory-Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Legal Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'COVID Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Political Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'PPP Related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'New CEO', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'CEO Resigns', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Product Demonstration', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Product Comparison', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Product Review', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Philanthropy related', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Real Estate Development', 'media_type_id' => 2, 'tag' => 'general'],

            ['name' => 'Strategic Partnership - Investment', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Strategic Partnership - Marketing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Strategic Partnership - Distribution', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Strategic Partnership - Technology', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Strategic Partnership - Manufacturing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Strategic Partnership - Development (Biotech/Biopharmaceutical)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Strategic Partnership - Development (Product)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Investment', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Marketing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Distribution', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Technology', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Manufacturing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Development (Biotech/Biopharmaceutical)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Joint Venture - Development (Product)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Investment', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Marketing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Distribution', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Technology', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Manufacturing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Development (Biotech/Biopharmaceutical)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Partnership Update - Development (Product)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Investment', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Marketing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Distribution', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Technology', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Manufacturing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Development (Biotech/Biopharmaceutical)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Update - Development (Product)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - IPO', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - SPACE Merger', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - Direct Listing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - Second Offering', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - Shelf Transaction', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - Reverse Merger', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Offering - Rights Offering', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Intellectual Property - Patent', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Intellectual Property - Trade Secret', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Intellectual Property - Trademark', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Intellectual Property - Copyright', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Factory Tour ', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Company Tour', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Clinical Trial-Preclinical (efficacy, toxicity)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Clinical Trial-Phase 0 (pharmacokinetics, bioavailability, half life)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Clinical Trial-Phase 1 (dose ranging)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Clinical Trial Phase 2 (efficacy, side effects)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Clinical Trial-Phase 3 (efficacy, safety)', 'media_type_id' => 2, 'tag' => 'general'],

            ['name' => 'Industry Related Geographic Phenomenon (Situation)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Industry Related Market Factors (Growth)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Industry Related Market Factors (Decrease)', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Demographics Population Increase', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Demographics Population Decrease', 'media_type_id' => 2, 'tag' => 'general'],

            ['name' => 'Capital Raising', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Crowd Funding Site', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Conference Presentation-Brokerage Firm', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Conference Presentation-3rd Party Conference', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Executive Broadcasts', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Recruiting Video', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Retention Video', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Administrative', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Business Development', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Human Resources', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Information Technology', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Operations', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Marketing', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Safety', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Training-Sales', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Political Based', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Layoffs', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'New Client', 'media_type_id' => 2, 'tag' => 'general'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subject_types');
    }
}
