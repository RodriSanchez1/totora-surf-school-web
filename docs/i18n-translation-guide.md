# i18n Translation Management Skill

## Purpose
Automated translation review and synchronization system for multi-language applications. This skill ensures all translation files remain complete, consistent, and culturally appropriate.

## Project Configuration

### Translation Files
**Location**: `/home/rodri/Repos/totora-surf-school-web/i18n/locales/`

**Supported Languages**:
- `en-US.ts` - English (Source of Truth)
- `es.ts` - Spanish (Latin American)
- `fr.ts` - French
- `pt-BR.ts` - Portuguese (Brazilian)

### File Structure
TypeScript object exports with nested key-value pairs:
```typescript
export const locale = {
  'section.key': 'Translation text',
  'section.nested.key': 'Text with <highlight>formatting</highlight>',
  // ...
}
```

## Core Workflow

### 1. Detect Changes
Compare all translation files against the English source:
```bash
cd /home/rodri/Repos/totora-surf-school-web/i18n/locales

# Count keys in each file
for file in *.ts; do
  echo "$file: $(grep -c "^  '[^/]" $file) keys"
done

# Expected: All files should have the same number of keys
```

### 2. Identify Missing Keys
**Process**:
1. Extract all keys from `en-US.ts` (source)
2. Compare against each target language file
3. Generate list of missing keys per language

**Common Missing Sections**:
- New features added to English not yet translated
- Platform-specific keys (testimonials, integrations)
- Form fields and UI elements
- New page sections

### 3. Translation Strategy

#### Never Translate:
- ✅ Proper nouns (names, places, brands)
- ✅ Prices and currency symbols
- ✅ Placeholder syntax (e.g., `{variable}`)
- ✅ HTML/formatting tags (e.g., `<highlight>`)
- ✅ Third-party platform names

#### Always Preserve:
- ✅ Line breaks and structure
- ✅ Special characters and accents
- ✅ Quote escaping patterns
- ✅ Semantic meaning and context

#### Cultural Adaptation Guidelines:

**Spanish (Latin American)**:
- Use informal "tú" for friendly tone, "usted" for formal contexts
- Local surf terminology
- Regional expressions over Iberian Spanish

**French**:
- Use formal "vous" in forms and professional contexts
- Tourism-specific vocabulary
- Canadian French acceptable for North American audience

**Portuguese (Brazilian)**:
- Brazilian Portuguese variants (not European)
- Informal language for marketing, formal for legal/forms
- Local surf culture references

### 4. Validation Steps

#### Manual Review Checklist:
- [ ] Key count matches across all files
- [ ] Formatting tags preserved
- [ ] Currency and numbers not translated
- [ ] Placeholders intact
- [ ] Cultural appropriateness
- [ ] Technical terminology correct
- [ ] Tone and voice consistent
- [ ] No truncated descriptions

### 5. Quality Assurance

**Translation Quality Indicators**:
- ✅ Natural flow in target language
- ✅ Appropriate formality level
- ✅ Consistent terminology across project
- ✅ SEO-friendly phrasing
- ✅ No literal translations that sound awkward

**Common Quality Issues**:
- ❌ Shortened descriptions (expand to match source detail)
- ❌ Inconsistent formatting (pipes, quotes)
- ❌ Overly literal translations
- ❌ Missing context-specific adaptations
- ❌ Technical terms in wrong language

## Execution Process

### When Adding New Translations:

1. **Update English Source First**
   - Add new keys to `en-US.ts`
   - Use clear, descriptive key names
   - Follow existing naming conventions

2. **Run Detection**
   ```bash
   # Compare key counts
   cd /home/rodri/Repos/totora-surf-school-web/i18n/locales
   for file in *.ts; do echo "$file: $(grep -c "^  '[^/]" $file)"; done
   ```

3. **Identify Missing Keys**
   - Note which files have fewer keys
   - Identify the specific missing sections

4. **Translate Missing Keys**
   - Follow cultural adaptation guidelines
   - Maintain formatting and structure
   - Preserve special elements (tags, placeholders, prices)

5. **Validate Results**
   - Run all validation checks
   - Manual review for quality
   - Test in application if possible

### When Reviewing Translations:

1. **Full Audit**
   - Count keys in all files
   - Verify all special elements preserved
   - Check for quality issues

2. **Spot Checks**
   - Review newest additions
   - Check high-traffic sections
   - Validate technical terminology

3. **Consistency Review**
   - Same terms translated consistently
   - Tone appropriate across sections
   - No mixed formality levels

## Best Practices

### Translation Principles:
1. **Context over literal**: Preserve meaning and intent
2. **Cultural relevance**: Adapt idioms and references
3. **Consistency**: Use same terms for same concepts
4. **Natural flow**: Should sound native, not translated
5. **SEO awareness**: Use terms locals would search

### Key Naming Conventions:
- Use dot notation: `page.section.element`
- Descriptive names: `form.submitButton` not `form.btn1`
- Consistent prefixes: `nav.*`, `footer.*`, `aboutPage.*`
- Logical hierarchy: Parent sections before child elements

### Common Patterns:
```typescript
// Navigation
'nav.item': 'Text'

// Page sections
'pageName.section.title': 'Title'
'pageName.section.subtitle': 'Subtitle'
'pageName.section.description': 'Description'

// Forms
'form.fieldName.label': 'Label'
'form.fieldName.placeholder': 'Placeholder'
'form.fieldName.error': 'Error message'

// Buttons/CTAs
'action.buttonName': 'Button Text'

// Lists
'category.item.title': 'Title'
'category.item.desc': 'Description'
```

## Troubleshooting

### Issue: Key Count Mismatch
**Symptom**: Files have different numbers of keys
**Solution**:
1. Diff files to find missing keys
2. Add missing keys to other languages

### Issue: Special Characters Breaking
**Symptom**: Apostrophes, quotes causing syntax errors
**Solution**:
- Use proper escaping: `\'` for single quotes
- Use template literals for complex strings
- Test TypeScript compilation

### Issue: Lost Formatting
**Symptom**: HTML tags or placeholders missing
**Solution**:
- Review with regex for `<[^>]+>` and `\{[^}]+\}`
- Cross-reference with English source
- Re-add missing elements

### Issue: Cultural Mismatch
**Symptom**: Translation sounds unnatural
**Solution**:
- Review with native speaker if possible
- Research local terminology
- Check competitor/similar sites in that language


## Metrics & Reporting

### Key Metrics:
- **Completeness**: % of keys translated across all languages
- **Consistency**: Same key count in all files
- **Quality**: Manual review scores
- **Coverage**: All sections represented

### Target State:
- ✅ 100% key completeness
- ✅ All validations passing
- ✅ Cultural appropriateness verified
- ✅ No quality issues

## Quick Commands Reference

```bash
# Navigate to translations
cd /home/rodri/Repos/totora-surf-school-web/i18n/locales

# Count all keys
for file in *.ts; do echo "$file: $(grep -c "^  '[^/]" $file)"; done

# Check highlights
for file in *.ts; do echo "$file: $(grep -c '<highlight>' $file)"; done

# Extract all keys from English
grep -oP "^  '\K[^']+" en-US.ts | sort

# Find differences between files
diff <(grep -oP "^  '\K[^']+" en-US.ts | sort) <(grep -oP "^  '\K[^']+" es.ts | sort)

# Check for placeholders
for file in *.ts; do echo "=== $file ==="; grep -oP '\{[^}]+\}' $file | sort -u; done
```

## Integration Notes

This skill should be invoked:
- ✅ Before any commit that adds/modifies English translations
- ✅ During PR reviews for i18n changes
- ✅ When setting up new languages
- ✅ When user reports translation issues
- ✅ As part of release checklist

## Last Updated
2026-01-04 - Initial skill documentation created